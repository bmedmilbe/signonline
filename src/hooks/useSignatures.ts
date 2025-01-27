import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { ResponseA } from "../services/api-client";
import { NewSign } from "./useAddSignature";

interface QueryParams {
  boss?: number;
  is_charge?: boolean;
  deliver?: number;
  completed?: boolean;
  completed_by?: number;
  friend?: number;
  friend_paid?: boolean;
  search?: string;
}

const useSignatures = (document_id: number, query_params: QueryParams) => {
  const apiClient = new ApiClient<NewSign>(
    "signs/documents/" + document_id + "/sign"
  );
  return useInfiniteQuery<ResponseA<NewSign>>({
    queryFn: ({ pageParam = 0 }) => {
      // console.log(pageParam);
      return apiClient.getAllSecond({
        params: {
          ...query_params,
          limit: 10,
          offset: pageParam * 10,
        },
      });
    },
    queryKey: ["documents", document_id, "signatures"],
    getNextPageParam: (lastPage, allPage) => {
      // return 3;
      // console.log(allPage.length % 10);
      //check if no next page in last page
      // console.log(lastPage);
      // return 1;
      let count = 0;
      allPage.map((p) => (count = count + p.results.length));
      return count != lastPage.count ? allPage.length : undefined;
    },
  });
};

export default useSignatures;
