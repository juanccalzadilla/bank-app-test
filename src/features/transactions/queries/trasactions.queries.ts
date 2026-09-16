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

      return {
        ...data,
        items: data.items.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        ),
      };
    },
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
