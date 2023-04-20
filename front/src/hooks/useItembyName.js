import { useQuery } from "@tanstack/react-query";
import { fetchItembyName } from "../api";
export const useItembyName = (query) => {
  return useQuery(["item", query], () => fetchItembyName(query), {
    staleTime: 0,
  });
};
