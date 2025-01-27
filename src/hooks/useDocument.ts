import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { NewSign } from "./useAddSignature";
export interface Document {
  id: number;
  title: string;

  description: string;
  file: string;
  image: string;
  upload_at: string;
  last_date: string;
  signs: NewSign[];
  text: string;
}
const useDocument = (document_id: number) => {
  const apiClient = new ApiClient<Document>("signs/documents/" + document_id);
  return useQuery<Document>({
    queryFn: apiClient.getSimple,
    queryKey: ["documents", document_id],
  });
};

export default useDocument;
