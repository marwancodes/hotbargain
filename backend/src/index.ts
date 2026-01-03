import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';


import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express';
import { userRoutes } from './routes/user.routes';
import { productRoutes } from './routes/product.routes';
import { commentRoutes } from './routes/comment.routes';




const app: express.Application = express();
const PORT = ENV.PORT;



app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true })); // Enable CORS for the frontend URL + credentials allows the frontend to send cookies to the backend so that we can authenticate the user.
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(express.json()); // parses JSON request bodies.
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms).

app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to HotBargain API - Powered by Express.js, PostgreSQL, Drizzle ORM & Clerk for Authentication.',
    endpoints: {
        users: "/api/users",
        products: "/api/products",
        comments: "/api/comments"
    }
   });
});


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});