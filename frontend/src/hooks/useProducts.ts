import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, getAllProducts, getProductById, getMyProducts, updateProduct } from "../lib/api";
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
    const queryClient = useQueryClient();

    return useMutation({ 
      mutationFn: deleteProduct,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["myProducts"] });
      },
    });
};

export const useMyProducts = () => {
  return useQuery<Product[]>({ queryKey: ["myProducts"], queryFn: getMyProducts, initialData: [] });
};

export const useUpdateProduct = () => {
  return useMutation({ mutationFn: updateProduct });

}