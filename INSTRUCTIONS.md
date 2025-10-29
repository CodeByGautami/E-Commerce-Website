# MongoDB Atlas setup & seeding instructions

Follow these steps to create a MongoDB Atlas cluster and seed the `products` collection.

1. Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas and create a new cluster.
2. Create a database user (username/password) with access to the cluster and note the credentials.
3. Whitelist your IP (or allow access from anywhere for testing).
4. Find your connection string in Atlas ("Connect" -> "Connect your application") and copy the URI.
   Example:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/nextjs-ecommerce?retryWrites=true&w=majority`
5. In the project, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Replace the `MONGODB_URI` value with your Atlas URI and optionally change `ADMIN_API_KEY`.
6. Install dependencies and run the seed script:
   ```bash
   npm install
   node scripts/seed.js
   ```
   The seed script will insert two sample products into the `products` collection.
7. Start the dev server:
   ```bash
   npm run dev
   ```
8. Open http://localhost:3000 — you should see products listed. Use `/admin` to add more.

## Notes
- If `node scripts/seed.js` fails, ensure `MONGODB_URI` is correctly set in your environment.
- After adding or updating a product via the API, call the `/api/revalidate` endpoint (see README curl example) to immediately revalidate ISR pages on the site.
