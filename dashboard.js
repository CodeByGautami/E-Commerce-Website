import clientPromise from '../lib/mongodb';
// import clientPromise from '../../../lib/mongodb';


export default function Dashboard({ stats, products }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Inventory Dashboard</h1>
      <p><strong>Total Products:</strong> {stats.total}</p>
      <p><strong>Low Stock (≤10):</strong> {stats.lowStock}</p>

      <h2 style={{ marginTop: 20 }}>📦 Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>
              <strong>{p.name}</strong> — {p.inventory} in stock
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const products = await db.collection('products').find({}).toArray();
    const cleanProducts = products.map((p) => ({
      ...p,
      _id: p._id.toString(),
      inventory: p.inventory ?? 0, // fallback to 0 if undefined
    }));

    const stats = {
      total: cleanProducts.length,
      lowStock: cleanProducts.filter((p) => p.inventory <= 10).length,
    };

    return { props: { stats, products: cleanProducts } };
  } catch (error) {
    console.error('Dashboard fetch error:', error);
    return { props: { stats: { total: 0, lowStock: 0 }, products: [] } };
  }
}
