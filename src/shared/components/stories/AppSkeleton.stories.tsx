import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { AppSkeleton } from '../AppSkeleton';

const meta: Meta<typeof AppSkeleton> = {
  title: 'Shared/AppSkeleton',
  component: AppSkeleton,
  args: {
    width: 200,
    height: 20,
    borderRadius: 8,
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    borderRadius: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof AppSkeleton>;

export const Default: Story = {};

export const Circle: Story = {
  args: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
};

export const FullWidth: Story = {
  args: {
    width: '100%',
    height: 16,
    borderRadius: 4,
  },
};

export const TransactionRow: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <AppSkeleton width={40} height={40} borderRadius={20} />
      <View style={{ flex: 1, gap: 8 }}>
        <AppSkeleton width="70%" height={14} borderRadius={4} />
        <AppSkeleton width="40%" height={12} borderRadius={4} />
      </View>
      <AppSkeleton width={60} height={14} borderRadius={4} />
    </View>
  ),
};

export const TransactionList: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {[0, 1, 2].map((i) => (
        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <AppSkeleton width={40} height={40} borderRadius={20} />
          <View style={{ flex: 1, gap: 8 }}>
            <AppSkeleton width="65%" height={14} borderRadius={4} />
            <AppSkeleton width="35%" height={12} borderRadius={4} />
          </View>
          <AppSkeleton width={60} height={14} borderRadius={4} />
        </View>
      ))}
    </View>
  ),
};
