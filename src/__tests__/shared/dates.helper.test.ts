import { shortDateFormatter } from "@/shared/helpers/dates.helper";

describe("shortDateFormatter", () => {
  it("formatea una fecha en locale es-ES por defecto", () => {
    const date = new Date("2024-01-15T00:00:00Z");
    expect(shortDateFormatter(date)).toBe("15 ene 2024");
  });

  it("formatea en locale en-US", () => {
    const date = new Date("2024-06-20T00:00:00Z");
    expect(shortDateFormatter(date, { locale: "en-US" })).toBe("Jun 20, 2024");
  });

  it("formatea el último día del año", () => {
    const date = new Date("2023-12-31T00:00:00Z");
    expect(shortDateFormatter(date)).toBe("31 dic 2023");
  });
});
