import { useQuery } from "@tanstack/react-query";
import { transactionsQueryKeys } from "./trasactions.queries";
import { transactionsApi } from "../api/transactions.api";

export function useFetchTransactionsQuery() {
  return useQuery({
    queryKey: transactionsQueryKeys.list(),
    queryFn: async () => {
      const data = await transactionsApi.getTransactions();

      return {
        ...data,
        items: data.items.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        ),
      };
    },
  });
}
