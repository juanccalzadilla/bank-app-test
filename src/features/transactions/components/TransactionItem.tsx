import { AppText } from "@/shared/components/AppText";
import { useTheme } from "@/theme/ThemeProvider";
import { View } from "react-native";
import { MoveDownLeft, MoveUpRight } from "lucide-react-native";
import { Transaction } from "../types/Transaction";
import { Image } from "expo-image";
import { isInbound, statusFormatter } from "../helpers/transaction.helpers";
import { amountFormatter, shortDateFormatter } from "@/shared/helpers";
import { AppSkeleton } from "@/shared/components/AppSkeleton";

import {memo} from "react";

type TransactionItemProps = {
  item: Transaction;
};

export const TransactionItem = memo( function TransactionItem({ item }: TransactionItemProps) {
  const theme = useTheme();
  return (
    <View
      className="flex-row justify-between items-center"
      style={{ marginTop: theme.spacing.xl, width: "100%" }}
    >
      <View className="flex-row items-center" style={{ flex: 1 }}>
        {item.flagged && (
          <View
            style={{
              backgroundColor: theme.color.warning,
              width: theme.spacing.sm,
              height: theme.spacing.sm,
              borderRadius: theme.radius.full,
              marginRight: theme.spacing.sm,
            }}
          />
        )}

        <View className="flex-row" style={{ gap: theme.spacing.lg, flex: 1 }}>
          <View
            className="items-center"
            style={{ marginTop: theme.spacing.sm }}
          >
            {item.label.imageUrl && (
              <Image
                source={{
                  uri: `${item.label.imageUrl}?c=${process.env.EXPO_PUBLIC_BRANDFETCH_API_KEY}`,
                }}
                style={{
                  width: theme.spacing.lg,
                  height: theme.spacing.lg,
                  borderRadius: theme.radius.full,
                  marginBottom: theme.spacing.xs,
                }}
                contentFit="fill"
                transition={200}
              />
            )}

            {isInbound(item) ? (
              <MoveDownLeft color={theme.color.success} />
            ) : (
              <MoveUpRight color={theme.color.error} />
            )}
          </View>

          <View style={{ flex: 1 }}>
            <AppText variant="body" numberOfLines={1}>
              {item.label.name}
            </AppText>
            <AppText variant="caption" color="onSurfaceVariant">
              {shortDateFormatter(item.created_at)}
            </AppText>
            <AppText
              variant="caption"
              color="onSurfaceVariant"
              numberOfLines={1}
            >
              {item.category}
            </AppText>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <AppText variant="subheading">
          {amountFormatter(item.amount.value, item.amount.currency)}
        </AppText>
        <AppText variant="caption" color="onSurfaceVariant">
          {statusFormatter(item)}
        </AppText>
      </View>
    </View>
  );
});

export function TransactionItemSkeleton() {
  const theme = useTheme();

  return (
    <View
      className="flex-row justify-between items-center"
      style={{ marginTop: theme.spacing.xl, width: "100%" }}
    >
      <View className="flex-row items-center" style={{ flex: 1 }}>
        <View className="flex-row" style={{ gap: theme.spacing.lg, flex: 1 }}>
          <View
            className="items-center"
            style={{ marginTop: theme.spacing.sm, gap: theme.spacing.xs }}
          >
            <AppSkeleton
              width={theme.spacing.lg}
              height={theme.spacing.lg}
              borderRadius={theme.radius.full}
            />
            <AppSkeleton width={24} height={24} borderRadius={4} />
          </View>

          <View
            style={{ flex: 1, gap: theme.spacing.xs, justifyContent: "center" }}
          >
            <AppSkeleton width="60%" height={14} borderRadius={4} />
            <AppSkeleton width="40%" height={12} borderRadius={4} />
            <AppSkeleton width="50%" height={12} borderRadius={4} />
          </View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end", gap: theme.spacing.xs }}>
        <AppSkeleton width={72} height={14} borderRadius={4} />
        <AppSkeleton width={48} height={12} borderRadius={4} />
      </View>
    </View>
  );
}
