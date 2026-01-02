import express from 'express';
import * as commentController from '../controllers/comment.controller';
import { requireAuth } from '@clerk/express'; 



const router = express.Router();

// POST /api/comments/:productId - Add comment to product (protected)
router.post("/:productId", requireAuth(), commentController.createComment);

// DELETE /api/comments/:commentId - Delete comment (protected - owner only)
router.delete("/:commentId", requireAuth(), commentController.deleteComment);  


export const commentRoutes = router;