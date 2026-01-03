import type { Request, Response } from "express";
import * as queries from "../db/queries";
import { getAuth } from "@clerk/express";



// Create comment (protected)
export const createComment = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { productId } = req.params;
    const { content } = req.body;

    if (!content) return res.status(400).json({ success: false, message: "Comment content is required" });

    // verify product exists
    const product = await queries.getProductById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    const comment = await queries.createComment({
      content,
      userId,
      productId,
    });

    res.status(201).json({ success: true, message: "Comment created successfully", data:comment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ success: false, message: "Failed to create comment" });
  }
};


// Delete comment (protected - owner only)
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { commentId } = req.params;

    // check if comment exists and belongs to user
    const existingComment = await queries.getCommentById(commentId);
    if (!existingComment) return res.status(404).json({ success: false, message: "Comment not found" });

    if (existingComment.userId !== userId) {
      return res.status(403).json({ success: false, message: "You can only delete your own comments" });
    }

    await queries.deleteComment(commentId);
    res.status(200).json({ success: true, message: "Comment deleted successfully", data: null });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ success: false, message: "Failed to delete comment" });
  }
};