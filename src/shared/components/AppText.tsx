import { Text, TextProps, TextStyle, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '@/theme/ThemeProvider';
import type { TypographyVariant, TextColorKey } from '@/theme/theme';

interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: TextColorKey; // 'default' | 'muted' | 'inverse'
}

export function AppText({
  variant = 'body',
  color = 'default',
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
        color: theme.color.text[color],
      },
    }).text;
  }, [theme, variant, color]);

  return <Text style={[variantStyle, style]} {...props} />;
}