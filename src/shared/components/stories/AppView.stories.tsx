import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppView from '../AppView';
import { AppText } from '../AppText';

const meta: Meta<typeof AppView> = {
  title: 'Shared/AppView',
  component: AppView,
};

export default meta;
type Story = StoryObj<typeof AppView>;

export const Default: Story = {
  render: () => (
    <AppView style={{ height: 200 }}>
      <AppText variant="body">
        AppView usa el color de fondo del tema activo (light/dark).
      </AppText>
    </AppView>
  ),
};

export const WithContent: Story = {
  render: () => (
    <AppView style={{ height: 300, padding: 16, gap: 8 }}>
      <AppText variant="heading">Título de pantalla</AppText>
      <AppText variant="body">Contenido de ejemplo dentro de AppView.</AppText>
      <AppText variant="caption" color="onSurfaceVariant">
        AppView recoge el backgroundColor del ThemeProvider automáticamente.
      </AppText>
    </AppView>
  ),
};
