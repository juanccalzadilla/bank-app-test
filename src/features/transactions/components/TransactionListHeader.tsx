import { AppText } from "@/shared/components/AppText";
import { useTheme } from "@/theme/ThemeProvider";

export default function TransactionListHeader() {
  const theme = useTheme();
  return (
    <>
      <AppText variant="heading" style={{ marginBottom: theme.spacing.md }}>
        Kutxabank
      </AppText>

      <AppText variant="subheading" style={{ marginBottom: theme.spacing.xxl }}>
        Plataforma de gestión de movimientos bancarios e inversiones
      </AppText>

      <AppText variant="body" className="tracking-wider">
        Historial de transacciones
      </AppText>
    </>
  );
}
