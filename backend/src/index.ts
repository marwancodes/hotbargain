import express from 'express';
import cors from 'cors';


import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express';




const app = express();
const PORT = ENV.PORT;



app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true })); // Enable CORS for the frontend URL
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(express.json()); // parses JSON request bodies.
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms).

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to HotBargain API - Powered by Express.js, PostgreSQL, Drizzle ORM & Clerk for Authentication.',
    endpoints: {
        users: "/api/users",
        products: "/api/products",
        comments: "/api/comments"
    }
   });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});