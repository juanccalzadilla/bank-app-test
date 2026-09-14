import { AppText } from "@/shared/components/AppText";
import AppView from "@/shared/components/AppView";
import { useTheme } from "@/theme/ThemeProvider";
import { Text, View } from "react-native";
import TransactionItem from "../components/TransactionItem";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <AppView
      style={{
        padding: theme.spacing.md,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <AppText variant="heading" style={{ marginBottom: theme.spacing.md }}>
        Kutxabank
      </AppText>

      <AppText variant="subheading" style={{ marginBottom: theme.spacing.xxl }}>
        Plataforma de gestión de movimientos bancarios e inversiones
      </AppText>

      <AppText variant="body" className="tracking-wider">Historial de transacciones</AppText>

      <TransactionItem/>
      <TransactionItem/>
      <TransactionItem/>
      <TransactionItem/>
      <TransactionItem/>
      <TransactionItem/>
      <TransactionItem/>
      <TransactionItem/>
    </AppView>
  );
}


