import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Search } from 'lucide-react-native';
import AppButton from './AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'Shared/AppButton',
  component: AppButton,
  args: {
    label: 'Confirmar',
    onPress: action('onPress'),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Confirmar',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Cancelar',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Ver más',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    label: 'Cargando...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'No disponible',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    label: 'Buscar',
    icon: <Search size={20} />,
  },
};
