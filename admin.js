import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
// import clientPromise from '../lib/mongodb';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    category: '',
    inventory: '',
  });
  const apiKey = process.env.NEXT_PUBLIC_ADMIN_API_KEY || 'changeme123';

  // Fetch all products when page loads
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error('Failed to load products:', res.statusText);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    }
    fetchProducts();
  }, []);

  // Add new product
  async function addProduct(e) {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.slug || !form.price || !form.category) {
      alert('Please fill in all required fields');
      return;
    }

    const newProduct = {
      ...form,
      id: nanoid(),
      price: Number(form.price),
      inventory: Number(form.inventory),
      lastUpdated: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        const data = await res.json();
        setProducts((prev) => [...prev, data]);
        setForm({
          name: '',
          slug: '',
          description: '',
          price: '',
          category: '',
          inventory: '',
        });
        alert('✅ Product added successfully!');
      } else {
        const err = await res.json();
        alert('❌ Error: ' + (err.error || res.statusText));
      }
    } catch (err) {
      alert('⚠️ Failed to add product: ' + err.message);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>🛠 Admin Panel</h1>

      <form onSubmit={addProduct} style={{ marginBottom: 20 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br />
        <input
          placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        /><br />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        /><br />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        /><br />
        <input
          placeholder="Inventory"
          type="number"
          value={form.inventory}
          onChange={(e) => setForm({ ...form, inventory: e.target.value })}
        /><br />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        /><br />
        <button type="submit">Add Product</button>
      </form>

      <h2>📦 Products</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id || p.id}>
              <strong>{p.name}</strong> — ₹{p.price} ({p.inventory} in stock)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
