import type { Product, User, Comment } from "./api";

export interface ProductWithMeta extends Product {
  user?: Pick<User, "name" | "imageUrl">;
  comments?: Pick<Comment, "id">[];
}