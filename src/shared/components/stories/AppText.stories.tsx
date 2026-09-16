import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { AppText } from '../AppText';

const meta: Meta<typeof AppText> = {
  title: 'Shared/AppText',
  component: AppText,
  args: {
    children: 'El texto de ejemplo',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['heading', 'subheading', 'body', 'caption'],
    },
    color: {
      control: 'select',
      options: ['onSurface', 'onSurfaceVariant', 'primary', 'onError', 'onPrimary'],
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AppText>;

export const Default: Story = {
  args: {
    variant: 'body',
    children: 'Texto body por defecto',
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <AppText variant="heading">Heading — Transferencias</AppText>
      <AppText variant="subheading">Subheading — Últimos movimientos</AppText>
      <AppText variant="body">Body — Ingreso nómina de empresa S.L.</AppText>
      <AppText variant="caption">Caption — Hace 2 días</AppText>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <AppText color="onSurface">onSurface (por defecto)</AppText>
      <AppText color="onSurfaceVariant">onSurfaceVariant</AppText>
      <AppText color="primary">primary</AppText>
      <AppText color="error">error</AppText>
      <AppText color="success">success</AppText>
    </View>
  ),
};

export const Truncated: Story = {
  args: {
    children:
      'Este texto es muy largo y debería truncarse cuando supera el límite de líneas establecido en el componente.',
    numberOfLines: 1,
  },
};
