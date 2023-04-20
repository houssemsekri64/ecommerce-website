import { useMutation } from "@tanstack/react-query";
import { fetchOrder } from "../api";

export const useOrder = (orderSucess) => {
  return useMutation(fetchOrder, {
    onSuccess: orderSucess,
  });
};
