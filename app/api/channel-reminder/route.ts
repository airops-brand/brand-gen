import { NextRequest, NextResponse } from 'next/server';

const CHANNEL = { id: 'C08BB271XE0', name: '#g-growth-tactics' };

const MESSAGE = {
  text: ":spiral_calendar_pad: Brand team requests for next week are due TODAY by EOD.",
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
  ],
};

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET?.trim()}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'SLACK_BOT_TOKEN not set' }, { status: 500 });
  }

  const res = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ channel: CHANNEL.id, ...MESSAGE }),
  });
  const data = await res.json();

  return NextResponse.json(
    { channel: CHANNEL.name, ok: data.ok, error: data.error ?? null },
    { status: data.ok ? 200 : 500 }
  );
}
