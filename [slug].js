import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { slug } = req.query;
  const client = await clientPromise;
  const db = client.db();
  const p = await db.collection('products').findOne({ slug });
  if (!p) return res.status(404).json({ error: 'not found' });
  p._id = p._id.toString();
  return res.status(200).json(p);
}
