import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../api";
export const useItems = (p) => {
  return useQuery(["items", p], () => fetchItems(p), {
    staleTime: 1000 * 60 * 60,
    keepPreviousData: true,
  });
};
