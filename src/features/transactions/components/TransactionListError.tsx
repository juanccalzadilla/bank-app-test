import AppButton from "@/shared/components/AppButton";
import { AppText } from "@/shared/components/AppText";
import { useTheme } from "@/theme/ThemeProvider";
import { FaceSlightlyFrowning } from "lucide-react-native";
import { View } from "react-native";

type TransactionListErrorProps = {
  message: string;
  onRetry: () => void;
};

export default function TrasactionListError({
  message,
  onRetry,
}: TransactionListErrorProps) {
  const { spacing } = useTheme();
  return (
    <View className="items-center justify-center" style={{ height: "100%" }}>
      <FaceSlightlyFrowning
        size={spacing.xxl}
        style={{ marginBottom: spacing.lg }}
      />
      <AppText variant="subheading">{message}</AppText>

      <AppButton
        label="Reintentar"
        variant="primary"
        onPress={onRetry}
        style={{ width: "100%", marginTop: spacing.lg }}
      />
    </View>
  );
}
