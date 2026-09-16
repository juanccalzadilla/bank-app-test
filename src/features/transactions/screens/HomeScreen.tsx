import AppView from "@/shared/components/AppView";
import { useTheme } from "@/theme/ThemeProvider";
import TransactionList from "../components/TransactionList";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <AppView
      style={{
        padding: theme.spacing.md,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
      className="items-start justify-start"
    >
      <TransactionList/>
    </AppView>
  );
}
