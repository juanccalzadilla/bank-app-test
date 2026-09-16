import tokens from './tokens.json';

export type ResolvedColor = typeof tokens.color.light;
export type FlatColorKey = keyof ResolvedColor;

export interface ResolvedTheme {
  color: ResolvedColor;
  spacing: typeof tokens.spacing;
  radius: typeof tokens.radius;
  typography: typeof tokens.typography;
}

export type SpacingKey = keyof typeof tokens.spacing;
export type RadiusKey = keyof typeof tokens.radius;
export type TypographyVariant = keyof typeof tokens.typography;

export const lightTheme: ResolvedTheme = {
  color: tokens.color.light,
  spacing: tokens.spacing,
  radius: tokens.radius,
  typography: tokens.typography,
};

export const darkTheme: ResolvedTheme = {
  color: tokens.color.dark,
  spacing: tokens.spacing,
  radius: tokens.radius,
  typography: tokens.typography,
};
