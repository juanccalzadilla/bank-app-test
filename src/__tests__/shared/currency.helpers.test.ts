import { amountFormatter } from "@/shared/helpers/currency.helpers";

const nbsp = "\u00a0";

describe("amountFormatter", () => {
  it("formatea euros en locale es-ES por defecto", () => {
    expect(amountFormatter(1500, "EUR")).toBe(`1500,00${nbsp}€`);
  });

  it("formatea dólares en locale en-US", () => {
    expect(amountFormatter(1500, "USD", { locale: "en-US" })).toBe("$1,500.00");
  });

  it("formatea cantidades negativas", () => {
    expect(amountFormatter(-250.5, "EUR")).toBe(`-250,50${nbsp}€`);
  });

  it("formatea cero", () => {
    expect(amountFormatter(0, "EUR")).toBe(`0,00${nbsp}€`);
  });

  it("formatea cantidades con decimales", () => {
    expect(amountFormatter(99.99, "EUR")).toBe(`99,99${nbsp}€`);
  });
});
