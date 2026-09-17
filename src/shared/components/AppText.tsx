import { Text, TextProps, TextStyle, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '@/theme/ThemeProvider';
import type { TypographyVariant, FlatColorKey } from '@/theme/theme';

interface AppTextProps extends Omit<TextProps, 'numberOfLines'> {
  variant?: TypographyVariant;
  color?: FlatColorKey;
  numberOfLines?: number | null;
}

export function AppText({
  variant = 'body',
  color = 'onBackground',
  numberOfLines = null,
  style,
  ...props
}: AppTextProps) {
  const theme = useTheme();

  const variantStyle = useMemo(() => {
    const t = theme.typography[variant];

    return StyleSheet.create({
      text: {
        fontSize: t.fontSize,
        lineHeight: t.lineHeight,
        fontWeight: t.fontWeight as TextStyle['fontWeight'],
        color: theme.color[color],
      },
    }).text;
  }, [theme, variant, color]);

  return (
    <Text
      style={[variantStyle, style]}
      numberOfLines={numberOfLines ?? undefined}
      {...props}
    />
  );
}
