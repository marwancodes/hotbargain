import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, deleteProduct, getAllProducts, getProductById } from "../lib/api";
import type { Product } from "../types/api";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    initialData: [], 
  });
};

export const useCreateProduct = () => {
    const result = useMutation({ mutationFn: createProduct });
    return result;
};

export const useProduct = (id: string) =>{
    return useQuery<Product>({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        enabled: !!id, // double bank operator, it means boolean
    });
};

export const useDeleteProduct = () => {
    return useMutation({ mutationFn: deleteProduct });
};