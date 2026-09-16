import * as z from "zod";

const Transaction = z
  .object({
    id: z.string(),
    type: z.enum(["inbound", "outbound"]),
    status: z.enum(["pending", "completed"]),
    amount: z.object({
      value: z.number(),
      currency: z.string(),
    }),
    label: z.object({
      name: z.string(),
      imageUrl: z.string().nullable(),
    }),
    category: z.string(),
    created_at: z.coerce.date(),
    flagged: z.boolean(),
  });

const TransactionWrapper = z.object({
  items: z.array(Transaction),
  nextCursor: z.string().nullish(),
});

export {
  Transaction as TransactionSchema,
  TransactionWrapper as TransactionWrapperSchema,
};
export type Transaction = z.infer<typeof Transaction>;
export type TransactionWrapper = z.infer<typeof TransactionWrapper>;
