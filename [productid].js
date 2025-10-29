import clientPromise from '../../../lib/mongodb';
import { toISO } from '../../../../utils/helpers';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'PUT') {
    const key = req.headers['x-api-key'] || req.query.apiKey;
    if (!key || key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: 'unauthorized' });
    const body = req.body;
    const update = { ...body, lastUpdated: toISO() };
    // If id is a string version of ObjectId, try to use ObjectId
    let filter;
    try { filter = { _id: new ObjectId(id) }; } catch(e) { filter = { id }; }
    const result = await db.collection('products').findOneAndUpdate(filter, { $set: update }, { returnDocument: 'after' });
    if (!result.value) return res.status(404).json({ error: 'not found' });
    const updated = result.value;
    updated._id = updated._id.toString();
    return res.status(200).json(updated);
  }

  res.setHeader('Allow', ['PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
