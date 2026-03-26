export const dynamic = 'force-dynamic';

export default async function HeraldPreview() {
  const blobUrl = `${process.env.BLOB_BASE_URL}/herald/draft.html`;

  let html = '';
  try {
    const res = await fetch(blobUrl, { cache: 'no-store' });
    html = await res.text();
  } catch {
    html = '<p style="font-family:sans-serif;padding:40px">No draft available yet.</p>';
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: '#000d05',
          color: '#EEFF8C',
          fontFamily: 'monospace',
          fontSize: '12px',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 9999,
          borderBottom: '1px solid #333',
        }}
      >
        <span>BRAND HERALD DRAFT PREVIEW</span>
        <a
          href={`/api/herald/publish?token=${process.env.HERALD_PUBLISH_TOKEN}`}
          style={{
            background: '#EEFF8C',
            color: '#000d05',
            padding: '6px 16px',
            fontFamily: 'monospace',
            fontSize: '11px',
            fontWeight: 'bold',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Publish to Team
        </a>
      </div>
      <div style={{ paddingTop: '40px' }}>
        <iframe
          srcDoc={html}
          style={{ width: '100%', height: 'calc(100vh - 40px)', border: 'none' }}
          title="Herald Preview"
        />
      </div>
    </>
  );
}
