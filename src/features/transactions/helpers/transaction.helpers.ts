import { Transaction } from "../types/Transaction";

export const isInbound = (t: Transaction) => t.type === "inbound";
export const isOutbound = (t: Transaction) => t.type === "outbound";

export const isPending = (t: Transaction) => t.status === "pending";
export const isCompleted = (t: Transaction) => t.status === "completed";

export const isFlagged = (t: Transaction) => t.flagged;

export const statusFormatter = (t: Transaction) => {
  switch (t.status) {
    case "pending":
      return "Pendiente";
    case "completed":
      return "Completada";
    default:
      return "Desconocido";
  }
};
