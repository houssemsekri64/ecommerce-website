import { useQuery } from "@tanstack/react-query";
import { fetchItem } from "../api";
export const useItem = (id) => {
  return useQuery(["item", id], () => fetchItem(id), {
    staleTime: 1000 * 60 * 60,
  });
};
