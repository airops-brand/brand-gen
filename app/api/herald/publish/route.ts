import { NextRequest, NextResponse } from 'next/server';
import { head } from '@vercel/blob';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (token !== process.env.HERALD_PUBLISH_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 1. Fetch the draft HTML from Vercel Blob
    const blobMeta = await head(`${process.env.BLOB_BASE_URL}/herald/draft.html`);
    const htmlRes = await fetch(blobMeta.url);
    const html = await htmlRes.text();

    // 2. Deploy to lagos via Vercel API
    const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'weekly-brand-herald',
        target: 'production',
        files: [
          {
            file: 'index.html',
            data: html,
            encoding: 'utf8',
          },
        ],
        projectSettings: {
          framework: null,
        },
      }),
    });

    const deployData = await deployRes.json();

    if (deployData.error) {
      throw new Error(`Vercel deploy failed: ${JSON.stringify(deployData.error)}`);
    }

    // 3. Post to #brand-team
    const slackRes = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      },
      body: JSON.stringify({
        channel: 'C0AAN9J3V2N', // #brand-team
        text: ':newspaper: The Brand Herald is live.',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: ':newspaper: *The AirOps Brand Herald is live.*\nYour weekly record of brand team doings.',
            },
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                text: { type: 'plain_text', text: 'Read This Week\'s Herald' },
                url: 'https://weekly-brand-herald.vercel.app',
                style: 'primary',
              },
            ],
          },
        ],
      }),
    });

    const slackData = await slackRes.json();

    return NextResponse.json({
      ok: true,
      deployment: deployData.id,
      slackOk: slackData.ok,
    });
  } catch (err) {
    console.error('Herald publish error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
