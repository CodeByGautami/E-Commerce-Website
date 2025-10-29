/**
 * node scripts/seed.js
 * Usage: node scripts/seed.js
 * Make sure MONGODB_URI is set in environment.
 */
const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) { console.error('Set MONGODB_URI in env'); process.exit(1); }
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const products = [
    {
      name: 'Basic T-Shirt',
      slug: 'basic-tshirt',
      description: 'Comfortable cotton tee.',
      price: 499,
      category: 'apparel',
      inventory: 34,
      lastUpdated: new Date().toISOString()
    },
    {
      name: 'Wireless Mouse',
      slug: 'wireless-mouse',
      description: 'Ergonomic mouse with long battery life.',
      price: 899,
      category: 'electronics',
      inventory: 8,
      lastUpdated: new Date().toISOString()
    }
  ];
  await db.collection('products').insertMany(products);
  console.log('Seeded products');
  await client.close();
}

main().catch(err => { console.error(err); process.exit(1); });
