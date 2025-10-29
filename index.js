import clientPromise from '../../../lib/mongodb';
import { toISO } from '../../../../utils/helpers';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  if (req.method === 'GET') {
    const products = await db.collection('products').find({}).toArray();
    return res.status(200).json(products.map(p => ({ ...p, _id: p._id.toString() })));
  }

  if (req.method === 'POST') {
    const key = req.headers['x-api-key'] || req.query.apiKey;
    if (!key || key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: 'unauthorized' });
    const body = req.body;
    const newP = {
      name: body.name,
      slug: body.slug,
      description: body.description || '',
      price: Number(body.price) || 0,
      category: body.category || 'uncategorized',
      inventory: Number(body.inventory) || 0,
      lastUpdated: toISO()
    };
    const result = await db.collection('products').insertOne(newP);
    newP._id = result.insertedId.toString();
    return res.status(201).json(newP);
  }

  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
