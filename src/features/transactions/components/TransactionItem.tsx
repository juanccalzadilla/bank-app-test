import { AppText } from "@/shared/components/AppText";
import { useTheme } from "@/theme/ThemeProvider";
import { View } from "react-native";
import { MoveDownLeft, MoveUpRight } from "lucide-react-native";
import { Transaction } from "../types/Transaction";
import { Image } from "expo-image";
import { isInbound, statusFormatter } from "../helpers/transaction.helpers";
import { amountFormatter, shortDateFormatter } from "@/shared/helpers";

type TransactionItemProps = {
  item: Transaction;
};

export default function TransactionItem({ item }: TransactionItemProps) {
  const theme = useTheme();
  return (
    <View
      className="flex-row justify-between w-full items-center"
      style={{ marginTop: theme.spacing.xl }}
    >
      <View className="flex-row items-center">
        {item.flagged && (
          <View
            className="w-3 h-3 rounded-full mr-3"
            style={{ backgroundColor: theme.color.important }}
          />
        )}

        <View className="flex-row" style={{ gap: theme.spacing.lg }}>
          <View
            className="items-center"
            style={{ marginTop: theme.spacing.sm }}
          >
            {item.label.imageUrl && (
              <Image
                source={{
                  uri: item.label.imageUrl + "?c=1idLm15T5xFSK35Gp0X",
                }}
                style={{
                  width: theme.spacing.lg,
                  height: theme.spacing.lg,
                  borderRadius: theme.radius.full,
                  marginBottom: theme.spacing.xs,
                }}
                contentFit="contain"
                transition={200}
              />
            )}

            {isInbound(item) ? (
              <MoveDownLeft color={theme.color.success} />
            ) : (
              <MoveUpRight />
            )}
          </View>

          <View>
            <AppText variant="body">{item.label.name}</AppText>
            <AppText variant="caption" color="muted">
              {shortDateFormatter(item.created_at)}
            </AppText>
            <AppText variant="caption" color="muted">
              {item.category}
            </AppText>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <AppText>
          {amountFormatter(item.amount.value, item.amount.currency)}
        </AppText>
        <AppText variant="caption" color="muted">
          {statusFormatter(item)}
        </AppText>
      </View>
    </View>
  );
}
