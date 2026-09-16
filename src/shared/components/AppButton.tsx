import { cloneElement, isValidElement, ReactElement, useMemo } from "react";
import { ActivityIndicator, Pressable, PressableProps, StyleSheet, View } from "react-native";
import { AppText } from "./AppText";
import { useTheme } from "@/theme/ThemeProvider";
import type { ResolvedTheme } from "@/theme/theme";

type ButtonVariant = "primary" | "secondary" | "text";

type AppButtonProps = PressableProps & {
  variant?: ButtonVariant;
  label: string;
  loading?: boolean;
  icon?: ReactElement;
};

function createStyles(theme: ResolvedTheme, variant: ButtonVariant, isDisabled: boolean) {
  const base = {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    gap: theme.spacing.sm,
    opacity: isDisabled ? 0.4 : 1,
  };

  const variantStyles = {
    primary: {
      ...base,
      backgroundColor: theme.color.primary,
      borderRadius: theme.radius.full,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
    },
    secondary: {
      ...base,
      backgroundColor: "transparent",
      borderRadius: theme.radius.full,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.color.outline,
    },
    text: {
      ...base,
      backgroundColor: "transparent",
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.xs,
    },
  };

  return StyleSheet.create({
    container: variantStyles[variant],
    inner: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.sm,
    },
  });
}

const variantTextColor: Record<ButtonVariant, keyof ResolvedTheme["color"]> = {
  primary: "onPrimary",
  secondary: "onSurfaceVariant",
  text: "primary",
};

const variantIconColor = (theme: ResolvedTheme): Record<ButtonVariant, string> => ({
  primary: theme.color.onPrimary,
  secondary: theme.color.onSurfaceVariant,
  text: theme.color.primary,
});

export default function AppButton({
  variant = "primary",
  label,
  loading = false,
  disabled = false,
  icon,
  style,
  ...props
}: AppButtonProps) {
  const theme = useTheme();
  const isDisabled = disabled || loading;
  const iconColors = variantIconColor(theme);
  const iconColor = iconColors[variant];

  const styles = useMemo(
    () => createStyles(theme, variant, isDisabled),
    [theme, variant, isDisabled],
  );

  const styledIcon =
    icon && isValidElement<{ color?: string; size?: number }>(icon)
      ? cloneElement(icon, { color: iconColor, size: icon.props.size ?? 20 })
      : null;

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) =>
        [styles.container, pressed && !isDisabled && { opacity: 0.7 }, style] as any
      }
      {...props}
    >
      <View style={styles.inner}>
        {loading ? (
          <ActivityIndicator size="small" color={iconColor} />
        ) : (
          <>
            {styledIcon}
            <AppText variant="body" color={variantTextColor[variant]}>
              {label}
            </AppText>
          </>
        )}
      </View>
    </Pressable>
  );
}
