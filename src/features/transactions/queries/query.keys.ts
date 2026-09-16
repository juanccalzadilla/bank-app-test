export const transactionsQueryKeys = {
  all: ["transactions"] as const,
  list: () => [...transactionsQueryKeys.all, "list"] as const,
};
