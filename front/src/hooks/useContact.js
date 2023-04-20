import { useMutation } from "@tanstack/react-query";
import { postContact } from "../api";

export const useContact = (Messagesucess, MessageFailed) => {
  return useMutation(postContact, {
    onSuccess: Messagesucess,
    onError: MessageFailed,
  });
};
