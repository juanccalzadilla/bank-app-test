import tokens from './tokens.json';

export type Theme = typeof tokens;

export const theme: Theme = tokens;

export type SpacingKey = keyof Theme['spacing'];
export type RadiusKey = keyof Theme['radius'];
export type TypographyVariant = keyof Theme['typography'];

export type FlatColorKey = Exclude<keyof Theme['color'], 'text'>;
export type TextColorKey = keyof Theme['color']['text'];