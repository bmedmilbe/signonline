import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface NewSign {
  id: number;
  name: string;
  id_number: string;
  phone: string;
}

const useAddSignature = (document_id: number) => {
  const client = new ApiClient<NewSign>(
    "signs/documents/" + document_id + "/sign"
  );
  const queryClient = useQueryClient();
  // interface AddTransactionContext {
  //   previousTransations: Transaction[];
  // }
  return useMutation<NewSign, Error, NewSign>({
    mutationFn: client.save,

    onSuccess: () => {
      // Invalidate the cache
      // console.log(data);
      Promise.all([
        queryClient.invalidateQueries(["documents", document_id, "signatures"]),
        queryClient.invalidateQueries(["documents", document_id]),
      ]);
    },
  });
};

export default useAddSignature;
