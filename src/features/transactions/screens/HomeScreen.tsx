import { AppText } from "@/shared/components/AppText";
import AppView from "@/shared/components/AppView";
import { useTheme } from "@/theme/ThemeProvider";
import TransactionItem from "../components/TransactionItem";
import { FlashList } from "@shopify/flash-list";
import { Zap } from "lucide-react-native";
import { useFetchTransactionsQuery } from "../queries/query.keys";
import { RefreshControl } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();

  const { data, refetch, isRefetching } = useFetchTransactionsQuery();
  return (
    <AppView
      style={{
        padding: theme.spacing.md,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
      className="items-start justify-start"
    >
      <FlashList
        className="w-full"
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }
        ListHeaderComponent={
          <>
            <AppText
              variant="heading"
              style={{ marginBottom: theme.spacing.md }}
            >
              Kutxabank
            </AppText>

            <AppText
              variant="subheading"
              style={{ marginBottom: theme.spacing.xxl }}
            >
              Plataforma de gestión de movimientos bancarios e inversiones
            </AppText>

            <AppText variant="body" className="tracking-wider">
              Historial de transacciones
            </AppText>
          </>
        }
        contentContainerStyle={{ paddingBottom: 0, paddingHorizontal: 0 }}
        data={data?.items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TransactionItem item={item} />}
      />
    </AppView>
  );
}
