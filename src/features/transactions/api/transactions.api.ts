import {
  TransactionWrapper,
  TransactionWrapperSchema,
} from "../types/Transaction";
import mockData from "./transactions.mock.json";

export const transactionsApi = {
  getTransactions: async ({
    cursor,
    limit = 10,
  }: {
    cursor?: string;
    limit?: number;
  }): Promise<TransactionWrapper> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startIndex = cursor ? Number(cursor.replace("cursor_", "")) : 0;

    const items = mockData.items
      .slice(startIndex, startIndex + limit)
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );

    const nextIndex = startIndex + items.length;

    return TransactionWrapperSchema.parse({
      items,
      nextCursor:
        nextIndex < mockData.items.length ? `cursor_${nextIndex}` : undefined,
    });
  },
};
