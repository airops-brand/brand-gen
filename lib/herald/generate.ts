import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const FONT_BASE = 'https://brand-gen-pi.vercel.app/fonts';

export function heraldShell(bodyContent: string, date: string, volume: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The AirOps Brand Herald</title>
<style>
  @font-face { font-family: 'Serrif VF'; src: url('${FONT_BASE}/SerrifVF.ttf') format('truetype'); font-weight: 100 900; }
  @font-face { font-family: 'Saans'; src: url('${FONT_BASE}/Saans-Regular.ttf') format('truetype'); font-weight: 400; }
  @font-face { font-family: 'Saans'; src: url('${FONT_BASE}/Saans-Medium.ttf') format('truetype'); font-weight: 500; }
  @font-face { font-family: 'Saans'; src: url('${FONT_BASE}/Saans-Bold.ttf') format('truetype'); font-weight: 700; }
  @font-face { font-family: 'Saans Mono'; src: url('${FONT_BASE}/SaansMono-Medium.ttf') format('truetype'); font-weight: 500; }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f5f0e8; font-family: 'Saans', 'Helvetica Neue', sans-serif; color: #000d05; }
  .page { max-width: 1100px; margin: 40px auto; background: #fffdf7; border: 2px solid #000d05; padding: 0; }

  .masthead { border-bottom: 3px double #000d05; padding: 24px 40px 16px; text-align: center; background: #fffdf7; }
  .masthead-eyebrow { font-family: 'Saans Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #676c79; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
  .masthead-title { font-family: 'Serrif VF', Georgia, serif; font-size: 80px; font-weight: 400; letter-spacing: -0.03em; line-height: 0.95; color: #000d05; margin-bottom: 10px; }
  .masthead-sub { font-family: 'Saans Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #000d05; border-top: 1px solid #000d05; border-bottom: 1px solid #000d05; padding: 6px 0; margin-top: 10px; display: flex; justify-content: space-between; align-items: center; }
  .masthead-sub span { flex: 1; text-align: center; }
  .masthead-sub span:first-child { text-align: left; }
  .masthead-sub span:last-child { text-align: right; }

  .kicker { font-family: 'Saans Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #ffffff; background: #000d05; display: inline-block; padding: 3px 8px; margin-bottom: 6px; }
  .content-area { padding: 0 40px 40px; }

  .banner-headline { border-bottom: 2px solid #000d05; padding: 20px 0 16px; margin-bottom: 0; }
  .banner-headline h1 { font-family: 'Serrif VF', Georgia, serif; font-size: 58px; font-weight: 400; letter-spacing: -0.02em; line-height: 1.0; color: #000d05; }
  .banner-deck { font-family: 'Saans', sans-serif; font-size: 15px; font-weight: 500; line-height: 1.45; color: #000d05; margin-top: 8px; max-width: 800px; }

  .columns-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; border-bottom: 1px solid #000d05; }
  .columns-2 { display: grid; grid-template-columns: 2fr 1fr; gap: 0; border-bottom: 1px solid #000d05; }
  .columns-2-equal { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-bottom: 1px solid #000d05; }
  .col { padding: 20px 24px; border-right: 1px solid #000d05; }
  .col:last-child { border-right: none; }
  .col:first-child { padding-left: 0; }

  .article-label { font-family: 'Saans Mono', monospace; font-size: 9px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #676c79; margin-bottom: 6px; display: block; }
  .article-headline { font-family: 'Serrif VF', Georgia, serif; font-size: 26px; font-weight: 400; letter-spacing: -0.01em; line-height: 1.1; color: #000d05; margin-bottom: 8px; }
  .article-headline.lg { font-size: 34px; }
  .article-headline.sm { font-size: 20px; }
  .article-byline { font-family: 'Saans Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: #676c79; margin-bottom: 10px; border-top: 1px solid #d4e8da; padding-top: 6px; }
  .article-body { font-family: 'Saans', sans-serif; font-size: 13px; line-height: 1.6; color: #09090b; }
  .article-body p { margin-bottom: 10px; }
  .article-body p:last-child { margin-bottom: 0; }

  .pull-quote { border-top: 3px solid #000d05; border-bottom: 1px solid #000d05; padding: 14px 0; margin: 16px 0; }
  .pull-quote p { font-family: 'Serrif VF', Georgia, serif; font-size: 18px; font-weight: 400; letter-spacing: -0.01em; line-height: 1.3; color: #000d05; font-style: italic; }
  .pull-quote cite { font-family: 'Saans Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: #676c79; display: block; margin-top: 8px; font-style: normal; }

  .rule { border: none; border-top: 1px solid #000d05; margin: 0; }
  .rule-thick { border: none; border-top: 3px solid #000d05; margin: 0; }
  .rule-double { border-top: 3px double #000d05; margin: 0; border-bottom: none; }

  .ticker { background: #000d05; color: #EEFF8C; font-family: 'Saans Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; padding: 7px 40px; white-space: nowrap; overflow: hidden; border-top: 1px solid #000d05; border-bottom: 1px solid #000d05; }

  .highlight-box { background: #000d05; color: #ffffff; padding: 20px 24px; margin-top: 0; }
  .highlight-box .article-label { color: #EEFF8C; }
  .highlight-box .article-headline { color: #ffffff; }
  .highlight-box .article-byline { color: #a5aab6; border-top-color: #333; }
  .highlight-box .article-body { color: #dfeae3; }

  .leaf-box { background: #f0faf4; border: 1px solid #d4e8da; padding: 18px 20px; margin-top: 14px; }
  .leaf-box-title { font-family: 'Saans Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: #008c44; margin-bottom: 10px; font-weight: 500; }
  .leaf-box ul { list-style: none; padding: 0; }
  .leaf-box li { font-family: 'Saans', sans-serif; font-size: 12px; line-height: 1.5; color: #09090b; padding: 4px 0; border-bottom: 1px solid #d4e8da; padding-left: 14px; position: relative; }
  .leaf-box li:last-child { border-bottom: none; }
  .leaf-box li::before { content: "▸"; position: absolute; left: 0; color: #008c44; font-size: 10px; }

  .stat-row { display: flex; gap: 0; border-top: 1px solid #000d05; margin-top: 14px; }
  .stat-item { flex: 1; padding: 12px 14px; border-right: 1px solid #d4e8da; text-align: center; }
  .stat-item:last-child { border-right: none; }
  .stat-num { font-family: 'Serrif VF', Georgia, serif; font-size: 32px; font-weight: 400; letter-spacing: -0.02em; color: #000d05; line-height: 1; }
  .stat-label { font-family: 'Saans Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: #676c79; margin-top: 4px; }

  .footer { background: #000d05; color: #a5aab6; font-family: 'Saans Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 40px; display: flex; justify-content: space-between; align-items: center; }
  .footer span { color: #EEFF8C; }

  .section-divider { display: flex; align-items: center; gap: 12px; padding: 10px 0 0; border-top: 2px solid #000d05; margin-top: 0; }
  .section-divider-label { font-family: 'Saans Mono', monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #000d05; font-weight: 500; white-space: nowrap; background: #EEFF8C; padding: 3px 8px; }
  .section-divider hr { flex: 1; border: none; border-top: 1px solid #d4e8da; }
</style>
</head>
<body>
<div class="page">
  <div class="masthead">
    <div class="masthead-eyebrow">
      <span>Internal Edition</span>
      <span>☙ The Official Record of Brand Team Doings ❧</span>
      <span>${date}</span>
    </div>
    <div class="masthead-title">The AirOps Brand Herald</div>
    <div class="masthead-sub">
      <span>${volume}</span>
      <span>Launching Things. Building Things. Doing It Again.</span>
      <span>Complimentary Copy</span>
    </div>
  </div>
  ${bodyContent}
  <div class="footer">
    <span>The AirOps Brand Herald &nbsp;·&nbsp; Internal Distribution Only</span>
    <span style="color: #EEFF8C;">${volume} &nbsp;·&nbsp; ${date}</span>
    <span>Printed in the Cloud &nbsp;·&nbsp; Powered by <span>AirOps</span></span>
  </div>
</div>
</body>
</html>`;
}

export async function generateHeraldHTML(data: HeraldData): Promise<string> {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  // Compute volume number based on weeks since Vol. 1 No. 1 (March 6, 2026)
  const vol1 = new Date('2026-03-06');
  const weeksSince = Math.floor((now.getTime() - vol1.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const volume = `Vol. 1, No. ${weeksSince + 2}`;

  const prompt = `You are writing the weekly edition of The AirOps Brand Herald — an internal newspaper for the AirOps brand team.

Here is the brand team's data from the past week:

NOTION STANDUP NOTES:
${data.standup || 'No standup notes available.'}

BRAND PROJECTS (in progress + recently done):
${JSON.stringify(data.projects, null, 2)}

UPCOMING LAUNCHES:
${JSON.stringify(data.launches, null, 2)}

UPCOMING EVENTS:
${JSON.stringify(data.events, null, 2)}

ASANA - BRAND WIP (completed this week):
${JSON.stringify(data.brandWip.completed, null, 2)}

ASANA - BRAND WIP (upcoming):
${JSON.stringify(data.brandWip.upcoming, null, 2)}

ASANA - Q1 CAMPAIGN (completed this week):
${JSON.stringify(data.q1Campaign.completed, null, 2)}

ASANA - Q1 CAMPAIGN (upcoming):
${JSON.stringify(data.q1Campaign.upcoming, null, 2)}

SLACK #brand-team MESSAGES (last 7 days):
${data.slackMessages.join('\n')}

---

Generate the BODY HTML content only (no <html>, <head>, <body>, or <style> tags — just the inner content that goes inside .page after the masthead and before the footer).

Use these exact CSS classes from the stylesheet:
- .ticker for the scrolling headline bar (dark bg, yellow text)
- .content-area to wrap all content
- .banner-headline with .kicker, h1, and .banner-deck for the lead story
- .stat-row / .stat-item / .stat-num / .stat-label for the stats row
- .columns-3 or .columns-2 or .columns-2-equal for column layouts
- .col for each column
- .section-divider / .section-divider-label for section headers
- .article-label, .article-headline (.lg or .sm), .article-byline, .article-body for articles
- .pull-quote for quotes
- .highlight-box for dark featured boxes
- .leaf-box / .leaf-box-title for bulleted list boxes
- .leaf-box with style="background: #fffde8; border-color: #d4d000;" for "what's next" lists

SECTIONS TO INCLUDE (use the data above to fill them):
1. A ticker tape with 5-6 punchy headline items from this week
2. A breaking news banner headline summarizing the week's most important story
3. A stats row (3-5 stats pulled from the data — tasks completed, launches, events, etc.)
4. Three-column section: "This Week" | "In Progress" | "Up Next"
5. A two-column section: one article about the most notable thing that happened + one leaf-box of "Coming Up"
6. A bottom row with "From the Field" (notable Slack moment or quote) + "Editor's Note" (Jess's brief close)

WRITING RULES:
- Newspaper voice — punchy, present tense, editorial energy
- No em dashes (use -- or restructure)
- No purple/blue gradient AI aesthetics in language
- Eyebrow labels are ALL CAPS
- Pull quotes should feel real and human
- The editor's note is always from Jess — warm, brief, direct
- If data is thin for a section, write confidently with what exists; don't say "no data available"

Return only the raw HTML body content. No markdown, no code fences, no explanation.`;

  const message = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });

  const bodyContent = message.content[0].type === 'text' ? message.content[0].text : '';
  return heraldShell(bodyContent, date, volume);
}

export interface HeraldData {
  standup: string;
  projects: object[];
  launches: object[];
  events: object[];
  brandWip: { completed: object[]; upcoming: object[] };
  q1Campaign: { completed: object[]; upcoming: object[] };
  slackMessages: string[];
}
