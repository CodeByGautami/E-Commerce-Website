# Next.js E-commerce Assignment 

**Author:** Gautami Vijay Sirsul  
**Date:** October 2025  

## 🚀 Overview
A small e-commerce-style **Next.js** application demonstrating multiple rendering strategies and backend integration with **MongoDB**.  

### Key Features:
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Server Side Rendering (SSR)
- Client-side fetching for admin panel
- Next.js API routes
- MongoDB database connection

---

## Project Structure

```bash
E-COMMERCE/
│
├── lib/
│   └── mongodb.js
│
├── pages/
│   ├── api/
│   │   ├── products/
│   │   │   ├── [productid].js
│   │   │   └── index.js
│   │   ├── slugs/
│   │   │   └── [slug].js
│   │   └── revalidate.js
│   │
│   ├── products/
│   ├── _app.js
│   ├── admin.js
│   ├── dashboard.js
│   └── index.js
│
├── scripts/
│   └── seed.js
│
├── styles/
│   └── style.css
│
├── utils/                
│   └── (any helper files)
│
├── .env.example           
├── .gitignore             
├── next.config.js         
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Quick Start (Local)

### 1️⃣ Create Environment File
Copy `.env.example` → `.env.local` and set:

MONGODB_URI=mongodb://localhost:27017/nextjs-ecommerce
ADMIN_API_KEY=key_nNiut1castGV135t92Tp1sf4Brs-Xjhe
NEXT_PUBLIC_ADMIN_API_KEY=key_nNiut1castGV135t92Tp1sf4Brs-Xjhe


### 2️⃣ Install Dependencies
```bash
npm install

```
3️⃣ Run Development Server
```bash
npm run dev
```
Then open http://localhost:3000


🧩 Pages & Rendering Strategies

| Page              | Path               | Rendering Type           | Description                             |
| ----------------- | ------------------ | ------------------------ | --------------------------------------- |
| 🏠 Home           | `/`                | **SSG**                  | Product listing generated at build time |
| 📦 Product Detail | `/products/[slug]` | **ISR**                  | Regenerates automatically every 60s     |
| 📊 Dashboard      | `/dashboard`       | **SSR**                  | Real-time inventory and stats           |
| 🛠️ Admin         | `/admin`           | **Client-side Fetching** | Add or edit products via API            |

🔗 API Routes

| Method | Endpoint               | Description          | Auth                   |
| ------ | ---------------------- | -------------------- | ---------------------- |
| `GET`  | `/api/products`        | Get all products     | ❌                      |
| `GET`  | `/api/products/[slug]` | Get product by slug  | ❌                      |
| `POST` | `/api/products`        | Add product          | ✅ Requires `x-api-key` |
| `PUT`  | `/api/products/[id]`   | Update product by ID | ✅ Requires `x-api-key` |
| `POST` | `/api/revalidate`      | Revalidate ISR pages | ✅ Requires `x-api-key` |

🔑 **Admin API Key**

```bash
key_GauXn92PL0v3rM9t7bZq4Jw8YsT
```


🧠 **Useful CURL Examples**
➕ Add a Product 

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-api-key: key_nNiut1castGV135t92Tp1sf4Brs-Xjhe" \
  -d '{"name":"New item","slug":"new-item","description":"desc","price":100,"category":"misc","inventory":20}'
```

🔄 **Revalidate a Page**

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-api-key: key_nNiut1castGV135t92Tp1sf4Brs-Xjhe" \
  -d '{"path":"/products/new-item"}'
```

✏️ **Update a Product by ID**

```bash
curl -X PUT http://localhost:3000/api/products/<id> \
  -H "Content-Type: application/json" \
  -H "x-api-key: key_nNiut1castGV135t92Tp1sf4Brs-Xjhe" \
  -d '{"price":120,"inventory":15}'
```

🧩 **Notes**

- MongoDB is managed through a helper (/lib/mongodb.js).
- Admin operations require the correct API key.
- Styling uses black background and golden-yellow accents for modern contrast.
- Protect admin routes properly in production

👨‍💻 **Author Info**

Name: Gautami Vijay Sirsul
Role: Full Stack Developer 
Email: [gautamisirsul1703@gmail.com]
GitHub: [https://github.com/CodeByGautami]
