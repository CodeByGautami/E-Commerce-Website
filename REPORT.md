📘 Project Report – Next.js E-commerce Assignment

Name: Gautami Vijay Sirsul
Course: B.E. Computer Engineering 
Date: October 2025
Role: Full Stack Developer

🧭 Project Overview

This project is a Next.js E-commerce Web Application built using JavaScript and MongoDB.
It demonstrates different Next.js rendering strategies (SSG, ISR, SSR) and includes an Admin Panel for managing products.
The backend is integrated using Next.js API routes and a MongoDB database connection.

🎯 Objectives

- Build a functional and modern e-commerce-style web app.
- Learn and implement Next.js data fetching methods.
- Connect a live MongoDB database for storing products.
- Create secure API routes with key-based authentication.
- Practice frontend styling using CSS.

⚙️ Technologies Used
Category	Tools / Libraries
Frontend	Next.js, React, CSS
Backend	Node.js, Next.js API Routes
Database	MongoDB
Hosting	Localhost (Dev) / GitHub Repository
Version Control	Git & GitHub

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
├── utils/                 # (if you are using this)
│   └── (any helper files)
│
├── .env.example           # ✅ Keep this for reference
├── .gitignore             # ✅ You’ll create this file (see below)
├── next.config.js         # (if exists)
├── package.json
├── package-lock.json
└── README.md
```

💡 Key Features

✅ Product listing with Static Site Generation (SSG)
✅ Product details with Incremental Static Regeneration (ISR)
✅ Dashboard page using Server-Side Rendering (SSR)
✅ Admin panel with secure Client-side API requests
✅ MongoDB integration with reusable connection helper
✅ Custom dark theme styling (black + golden-yellow theme)

🧩 Functional Modules

Home Page — Displays all products (SSG).
Product Page — Dynamic routes for each product (ISR).
Dashboard — Server-rendered stats for admins (SSR).
Admin Page — Add or edit products using forms.
API Endpoints — Handle CRUD operations for product data.

🔐 Security

- Protected admin actions using a secret API key.
- API key stored in .env.local file.
- MongoDB credentials hidden through environment variables.

🎨 UI / Styling

- Black background with golden-yellow accent colors.
- Centered layout and clean form design.
- Inputs show borders only on focus for a minimal look.
- Responsive and simple CSS styling.

🧠 Learning Outcomes

- Learned how Next.js handles different rendering techniques.
- Improved understanding of API routing and database integration.
- Gained experience in frontend styling and deployment workflow.
- Practiced Git & GitHub for version control and collaboration.

📎 GitHub Repository

🔗 [https://github.com/CodeByGautami]



