import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../lib/api";
import type { Product } from "../types/api";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    initialData: [], 
  });
};
