import { TransactionWrapper, TransactionWrapperSchema } from "../types/Transaction";
import mockData from "./transactions.mock.json";


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const transactionsApi = {
  getTransactions: async (): Promise<TransactionWrapper> => {
    await delay(500);

    return TransactionWrapperSchema.parse(mockData);
  },
};
