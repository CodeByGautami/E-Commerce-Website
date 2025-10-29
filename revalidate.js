import clientPromise from '../../../lib/mongodb';


export default async function handler(req, res) {
  const key = req.headers['x-api-key'] || req.query.apiKey;
  if (!key || key !== process.env.ADMIN_API_KEY)
    return res.status(401).json({ error: 'unauthorized' });

  try {
    // expected body: { path: '/products/some-slug' }
    const body = req.body || {};
    if (!body.path)
      return res.status(400).json({ error: 'path required' });

    await res.revalidate(body.path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ error: 'revalidate failed', details: err.message });
  }
}
