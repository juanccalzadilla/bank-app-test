export const shortDateFormatter = (
  date: Date,
  { locale = "es-ES" }: { locale?: string } = {},
) =>
  new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
