import { useQuery } from "react-query";

export const useColorsData = ({
  queryKey,
  fetchCall,
  queryOptions,
}) => {
  return useQuery(queryKey, fetchCall,  queryOptions );
};
