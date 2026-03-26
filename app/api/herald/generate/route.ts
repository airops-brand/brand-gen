import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { collectHeraldData } from '@/lib/herald/data';
import { generateHeraldHTML } from '@/lib/herald/generate';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET?.trim()}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 1. Collect data
    const data = await collectHeraldData();

    // 2. Generate HTML
    const html = await generateHeraldHTML(data);

    // 3. Store in Vercel Blob
    const blob = await put('herald/draft.html', html, {
      access: 'public',
      contentType: 'text/html',
      addRandomSuffix: false,
    });

    // 4. DM Jess with preview + publish links
    const previewUrl = `${process.env.NEXT_PUBLIC_APP_URL}/herald/preview`;
    const publishUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/herald/publish?token=${process.env.HERALD_PUBLISH_TOKEN}`;

    const slackRes = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      },
      body: JSON.stringify({
        channel: 'U09K60X677C',
        text: 'Brand Herald draft is ready for review.',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: ':newspaper: *Brand Herald draft is ready.*\nReview the preview and publish when you\'re happy with it.',
            },
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                text: { type: 'plain_text', text: 'Preview Draft' },
                url: previewUrl,
                style: 'primary',
              },
              {
                type: 'button',
                text: { type: 'plain_text', text: 'Publish to Team' },
                url: publishUrl,
                style: 'danger',
              },
            ],
          },
        ],
      }),
    });

    const slackData = await slackRes.json();

    return NextResponse.json({
      ok: true,
      blobUrl: blob.url,
      slackOk: slackData.ok,
      previewUrl,
    });
  } catch (err) {
    console.error('Herald generate error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
