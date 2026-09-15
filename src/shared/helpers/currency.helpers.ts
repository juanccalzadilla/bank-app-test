

export const amountFormatter
 = (amount: number, currency: string, { locale = "es-ES" }: { locale?: string } = {}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};