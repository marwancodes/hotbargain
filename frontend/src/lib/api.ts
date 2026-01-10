import api from "./axios";
import type {
  User,
  Product,
  Comment,
  CreateProductDTO,
  UpdateProductDTO,
  CreateCommentDTO,
  ApiResponse,
} from "../types/api";

// ================= USERS =================
export const syncUser = async (userData: Partial<User>): Promise<User> => {
  const { data } = await api.post<User>("/users/sync", userData);
  return data;
};

// ================= PRODUCTS =================
export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<ApiResponse<Product[]>>("/products");
  return data.data ?? [];
};

export const getProductById = async (id: string): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};

export const getMyProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>("/products/my");
  return data;
};

export const createProduct = async (productData: CreateProductDTO): Promise<Product> => {
  const { data } = await api.post<Product>("/products", productData);
  return data;
};

export const updateProduct = async ({id, ...productData}: UpdateProductDTO): Promise<Product> => {
  const { data } = await api.put<Product>(`/products/${id}`, productData);
  return data;
};

export const deleteProduct = async (id: string): Promise<ApiResponse<void>> => {
  const { data } = await api.delete<ApiResponse<void>>(`/products/${id}`);
  return data;
};

// ================= COMMENTS =================
export const createComment = async ({productId, content}: CreateCommentDTO): Promise<Comment> => {
  const { data } = await api.post<Comment>(`/comments/${productId}`, { content});
  return data;
};

export const deleteComment = async (commentId: string): Promise<ApiResponse<void>> => {
  const { data } = await api.delete<ApiResponse<void>>(`/comments/${commentId}`);
  return data;
};
