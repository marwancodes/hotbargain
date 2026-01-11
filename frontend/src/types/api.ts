// ===== USERS =====
export interface User {
  id: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// ===== USER (PUBLIC VIEW) =====
export interface PublicUser {
  name: string | null;
  imageUrl: string | null;
}

// ===== PRODUCTS =====
export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: PublicUser;
}

// ===== COMMENTS =====
export interface Comment {
  id: string;
  content: string;
  userId: string;
  productId: string;
  createdAt: Date;
}

// ===== REQUEST PAYLOADS =====
export interface CreateProductDTO {
  title: string;
  description: string;
  imageUrl: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
  id: string;
}

export interface CreateCommentDTO {
  productId: string;
  content: string;
}

// ===== DELETE RESPONSE =====
export interface ApiResponse<T = undefined> {
  success: boolean;
  message: string;
  data?: T;
}