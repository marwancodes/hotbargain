import express from 'express';
import { syncUser } from '../controllers/user.controller';
import { requireAuth } from '@clerk/express';

const router = express.Router();

// /api/users/sync - POST - Sync user data from Clerk to local database
router.post('/sync', requireAuth(), syncUser);


export const userRoutes = router;