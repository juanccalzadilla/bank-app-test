import {
  TransactionSchema,
  TransactionWrapperSchema,
} from "@/features/transactions/types/Transaction";

const validTransaction = {
  id: "txn_001",
  type: "inbound",
  status: "completed",
  amount: { value: 150.5, currency: "EUR" },
  label: { name: "Mercadona", imageUrl: "https://example.com/logo.png" },
  category: "alimentación",
  created_at: "2024-03-10T12:00:00Z",
  flagged: false,
};

describe("TransactionSchema", () => {
  it("parsea una transacción válida", () => {
    const result = TransactionSchema.parse(validTransaction);
    expect(result.id).toBe("txn_001");
    expect(result.type).toBe("inbound");
    expect(result.status).toBe("completed");
  });

  it("convierte created_at de string a Date", () => {
    const result = TransactionSchema.parse(validTransaction);
    expect(result.created_at).toBeInstanceOf(Date);
  });

  it("acepta imageUrl como null", () => {
    const result = TransactionSchema.parse({
      ...validTransaction,
      label: { name: "Transferencia", imageUrl: null },
    });
    expect(result.label.imageUrl).toBeNull();
  });

  it("acepta flagged como true", () => {
    const result = TransactionSchema.parse({ ...validTransaction, flagged: true });
    expect(result.flagged).toBe(true);
  });

  it("falla si falta el campo id", () => {
    const { id, ...withoutId } = validTransaction;
    expect(() => TransactionSchema.parse(withoutId)).toThrow();
  });

  it("falla si type no es inbound ni outbound", () => {
    expect(() =>
      TransactionSchema.parse({ ...validTransaction, type: "transfer" })
    ).toThrow();
  });

  it("falla si status no es pending ni completed", () => {
    expect(() =>
      TransactionSchema.parse({ ...validTransaction, status: "failed" })
    ).toThrow();
  });

  it("falla si amount.value no es número", () => {
    expect(() =>
      TransactionSchema.parse({
        ...validTransaction,
        amount: { value: "cien", currency: "EUR" },
      })
    ).toThrow();
  });

  it("falla si imageUrl no es string ni null", () => {
    expect(() =>
      TransactionSchema.parse({
        ...validTransaction,
        label: { name: "Test", imageUrl: 123 },
      })
    ).toThrow();
  });
});

describe("TransactionWrapperSchema", () => {
  it("parsea un wrapper con items y nextCursor", () => {
    const result = TransactionWrapperSchema.parse({
      items: [validTransaction],
      nextCursor: "cursor_10",
    });
    expect(result.items).toHaveLength(1);
    expect(result.nextCursor).toBe("cursor_10");
  });

  it("acepta nextCursor como undefined", () => {
    const result = TransactionWrapperSchema.parse({
      items: [validTransaction],
    });
    expect(result.nextCursor).toBeUndefined();
  });

  it("acepta nextCursor como null", () => {
    const result = TransactionWrapperSchema.parse({
      items: [validTransaction],
      nextCursor: null,
    });
    expect(result.nextCursor).toBeNull();
  });

  it("parsea items vacíos", () => {
    const result = TransactionWrapperSchema.parse({ items: [] });
    expect(result.items).toHaveLength(0);
  });

  it("falla si items no es un array", () => {
    expect(() =>
      TransactionWrapperSchema.parse({ items: validTransaction })
    ).toThrow();
  });
});
