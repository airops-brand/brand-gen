// Fetches brand team data from Notion, Asana, and Slack for the weekly herald

const NOTION_VERSION = '2022-06-28';

async function notionFetch(path: string, body?: object) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  return res.json();
}

async function asanaFetch(path: string) {
  const res = await fetch(`https://app.asana.com/api/1.0${path}`, {
    headers: { Authorization: `Bearer ${process.env.ASANA_ACCESS_TOKEN}` },
  });
  return res.json();
}

async function slackFetch(path: string, params: Record<string, string> = {}) {
  const url = new URL(`https://slack.com/api${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}` },
  });
  return res.json();
}

function oneWeekAgo() {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return d.toISOString();
}

// --- Notion ---

async function getStandupNotes() {
  // Daily standup page
  const page = await notionFetch('/blocks/e101f419db8a8282911d0173f7836b07/children?page_size=50');
  const lines: string[] = [];
  for (const block of page.results ?? []) {
    const text = block[block.type]?.rich_text?.map((t: { plain_text: string }) => t.plain_text).join('') ?? '';
    if (text) lines.push(text);
  }
  return lines.slice(0, 30).join('\n');
}

async function getBrandProjects() {
  // Brand team projects database — in progress + done this week
  const data = await notionFetch('/databases/2b01f419db8a8014b8b3c60154464f9b/query', {
    filter: {
      or: [
        { property: 'Status', status: { equals: 'In progress' } },
        { property: 'Status', status: { equals: 'In review' } },
        { property: 'Status', status: { equals: 'Done' } },
      ],
    },
    sorts: [{ property: 'Due', direction: 'ascending' }],
    page_size: 20,
  });
  return (data.results ?? []).map((r: NotionPage) => ({
    name: r.properties?.Name?.title?.[0]?.plain_text ?? '',
    status: r.properties?.Status?.status?.name ?? '',
    due: r.properties?.Due?.date?.start ?? null,
    owner: r.properties?.['First Pass Owner']?.people?.[0]?.name ?? null,
  }));
}

async function getUpcomingLaunches() {
  const data = await notionFetch('/databases/2e11f419db8a80c781c6fec4d04de0e3/query', {
    filter: {
      or: [
        { property: 'Status', status: { equals: 'In progress' } },
        { property: 'Status', status: { equals: 'Not started' } },
      ],
    },
    sorts: [{ property: 'Date', direction: 'ascending' }],
    page_size: 10,
  });
  return (data.results ?? []).map((r: NotionPage) => ({
    name: r.properties?.['Launch name']?.title?.[0]?.plain_text ?? '',
    status: r.properties?.Status?.status?.name ?? '',
    tier: r.properties?.Tier?.select?.name ?? null,
    date: r.properties?.Date?.date?.start ?? null,
  }));
}

async function getUpcomingEvents() {
  const data = await notionFetch('/databases/2541f419db8a80ea833adea5355b9403/query', {
    filter: {
      and: [
        {
          or: [
            { property: 'Event Status', select: { equals: 'Booked' } },
            { property: 'Event Status', select: { equals: 'WIP' } },
          ],
        },
        {
          property: 'Date of Event',
          date: { on_or_after: new Date().toISOString().split('T')[0] },
        },
      ],
    },
    sorts: [{ property: 'Date of Event', direction: 'ascending' }],
    page_size: 5,
  });
  return (data.results ?? []).map((r: NotionPage) => ({
    name: r.properties?.Event?.title?.[0]?.plain_text ?? '',
    date: r.properties?.['Date of Event']?.date?.start ?? null,
    type: r.properties?.['Event Type']?.select?.name ?? null,
  }));
}

// --- Asana ---

async function getAsanaTasks(projectId: string) {
  const since = oneWeekAgo();
  const twoWeeksOut = new Date();
  twoWeeksOut.setDate(twoWeeksOut.getDate() + 14);

  const fields = 'name,completed,completed_at,due_on,assignee.name,memberships.section.name';

  const [completedRes, upcomingRes] = await Promise.all([
    asanaFetch(`/tasks?project=${projectId}&completed_since=${since}&opt_fields=${fields}&limit=25`),
    asanaFetch(`/tasks?project=${projectId}&completed=false&due_on.before=${twoWeeksOut.toISOString().split('T')[0]}&opt_fields=${fields}&limit=25`),
  ]);

  const completed = (completedRes.data ?? []).map((t: AsanaTask) => ({
    name: t.name,
    assignee: t.assignee?.name ?? null,
    completedAt: t.completed_at ?? null,
  }));

  const upcoming = (upcomingRes.data ?? [])
    .filter((t: AsanaTask) => t.due_on)
    .map((t: AsanaTask) => ({
      name: t.name,
      assignee: t.assignee?.name ?? null,
      dueOn: t.due_on,
    }));

  return { completed, upcoming };
}

// --- Slack ---

async function getBrandTeamMessages() {
  const since = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
  const data = await slackFetch('/conversations.history', {
    channel: 'C0AAN9J3V2N', // #brand-team
    oldest: String(since),
    limit: '40',
  });
  return (data.messages ?? [])
    .filter((m: SlackMessage) => m.type === 'message' && !m.bot_id && m.text)
    .map((m: SlackMessage) => m.text)
    .slice(0, 20);
}

// --- Main export ---

export async function collectHeraldData() {
  const [standup, projects, launches, events, brandWip, q1Campaign, slackMessages] =
    await Promise.all([
      getStandupNotes().catch(() => ''),
      getBrandProjects().catch(() => []),
      getUpcomingLaunches().catch(() => []),
      getUpcomingEvents().catch(() => []),
      getAsanaTasks('1212008558402878').catch(() => ({ completed: [], upcoming: [] })),
      getAsanaTasks('1212321239632383').catch(() => ({ completed: [], upcoming: [] })),
      getBrandTeamMessages().catch(() => []),
    ]);

  return { standup, projects, launches, events, brandWip, q1Campaign, slackMessages };
}

// Types
interface NotionPage {
  properties: Record<string, NotionProperty>;
}
interface NotionProperty {
  title?: { plain_text: string }[];
  status?: { name: string };
  select?: { name: string };
  date?: { start: string };
  people?: { name: string }[];
  url?: string;
}
interface AsanaTask {
  name: string;
  completed: boolean;
  completed_at?: string;
  due_on?: string;
  assignee?: { name: string };
}
interface SlackMessage {
  type: string;
  bot_id?: string;
  text: string;
}
