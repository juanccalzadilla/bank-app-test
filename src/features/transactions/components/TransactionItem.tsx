import { AppText } from "@/shared/components/AppText";
import { useTheme } from "@/theme/ThemeProvider";
import { Image, View } from "react-native";
import { MoveDownLeft } from "lucide-react-native";

export default function TransactionItem() {
  const theme = useTheme();
  return (
    <View
      className="flex-row justify-between w-100 items-center"
      style={{ marginTop: theme.spacing.xl }}
    >
      <View className="flex-row" style={{ gap: theme.spacing.lg }}>
        <View className="items-center" style={{ marginTop: theme.spacing.sm }}>
          <Image
            source={{ uri: "https://placehold.co/100.png" }}
            style={{
              width: theme.spacing.lg,
              height: theme.spacing.lg,
              borderRadius: theme.radius.full,
            }}
          />

          <MoveDownLeft />
        </View>

        <View>
          <AppText variant="body">Sarah William</AppText>
          <AppText variant="caption" color="muted">
            June 28, 2026
          </AppText>
          <AppText variant="caption" color="muted">
            Servicios digitales
          </AppText>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <AppText>-15.99€</AppText>
        <AppText variant="caption" color="muted">
          Completed
        </AppText>
      </View>
    </View>
  );
}
