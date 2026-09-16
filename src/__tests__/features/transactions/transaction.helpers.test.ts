import {
  isInbound,
  isOutbound,
  isPending,
  isCompleted,
  isFlagged,
  statusFormatter,
} from "@/features/transactions/helpers/transaction.helpers";
import { Transaction } from "@/features/transactions/types/Transaction";

const base: Transaction = {
  id: "1",
  type: "inbound",
  status: "completed",
  amount: { value: 100, currency: "EUR" },
  label: { name: "Amazon", imageUrl: null },
  category: "compras",
  created_at: new Date("2024-01-01"),
  flagged: false,
};

describe("isInbound / isOutbound", () => {
  it("devuelve true para inbound", () => {
    expect(isInbound({ ...base, type: "inbound" })).toBe(true);
    expect(isOutbound({ ...base, type: "inbound" })).toBe(false);
  });

  it("devuelve true para outbound", () => {
    expect(isOutbound({ ...base, type: "outbound" })).toBe(true);
    expect(isInbound({ ...base, type: "outbound" })).toBe(false);
  });
});

describe("isPending / isCompleted", () => {
  it("detecta pending", () => {
    expect(isPending({ ...base, status: "pending" })).toBe(true);
    expect(isCompleted({ ...base, status: "pending" })).toBe(false);
  });

  it("detecta completed", () => {
    expect(isCompleted({ ...base, status: "completed" })).toBe(true);
    expect(isPending({ ...base, status: "completed" })).toBe(false);
  });
});

describe("isFlagged", () => {
  it("devuelve true cuando flagged es true", () => {
    expect(isFlagged({ ...base, flagged: true })).toBe(true);
  });

  it("devuelve false cuando flagged es false", () => {
    expect(isFlagged({ ...base, flagged: false })).toBe(false);
  });
});

describe("statusFormatter", () => {
  it("devuelve Pendiente para pending", () => {
    expect(statusFormatter({ ...base, status: "pending" })).toBe("Pendiente");
  });

  it("devuelve Completada para completed", () => {
    expect(statusFormatter({ ...base, status: "completed" })).toBe("Completada");
  });
});
