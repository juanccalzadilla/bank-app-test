import { useInfiniteQuery } from "@tanstack/react-query";
import { transactionsApi } from "../api/transactions.api";
import { transactionsQueryKeys } from "./query.keys";

export function useFetchTransactionsQuery() {
  return useInfiniteQuery({
    queryKey: transactionsQueryKeys.list(),
    queryFn: async ({ pageParam }) => {
      const data = await transactionsApi.getTransactions({
        cursor: pageParam,
      });

      return data;
    },
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
