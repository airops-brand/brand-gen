import { NextRequest, NextResponse } from 'next/server';

const CHANNELS = [
  { id: 'C0A2T4MV3E2', name: '#creative-requests' },
  { id: 'C08BB271XE0', name: '#g-growth-tactics' },
];

const MESSAGE = {
  text: ":spiral_calendar_pad: *Brand team requests for next week are due TODAY by EOD.*",
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":spiral_calendar_pad: *Brand team requests for next week are due TODAY by EOD.*",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "If you need anything from brand or creative next week — social assets, landing pages, graphics, web updates — submit your request today (Thursday EOD) so the team can scope, prioritize, and plan without scrambling.\n\n*Anything submitted after Thursday goes into the following week's queue.*",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":point_right: Not sure what to ask for or how to scope it? Use the <https://brand-gen-pi.vercel.app/creative-requests-rubric.html|Creative Request Rubric> — it covers tiers, timelines, and exactly what to include in your submission.",
      },
    },
    {
      type: "divider",
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "Questions? Ping Jess in #brand-team",
        },
      ],
    },
  ],
};

async function postToChannel(channelId: string, token: string) {
  const res = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ channel: channelId, ...MESSAGE }),
  });
  return res.json();
}

export async function GET(req: NextRequest) {
  // Verify Vercel cron secret
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'SLACK_BOT_TOKEN not set' }, { status: 500 });
  }

  const results = await Promise.all(
    CHANNELS.map(async (ch) => {
      const data = await postToChannel(ch.id, token);
      return { channel: ch.name, ok: data.ok, error: data.error ?? null };
    })
  );

  const allOk = results.every((r) => r.ok);
  return NextResponse.json({ results }, { status: allOk ? 200 : 500 });
}
