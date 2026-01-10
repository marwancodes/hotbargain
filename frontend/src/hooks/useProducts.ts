import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getAllProducts } from "../lib/api";
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