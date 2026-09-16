import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { TransactionItem, TransactionItemSkeleton } from './TransactionItem';
import type { Transaction } from '../types/Transaction';

// ─── Fixtures ────────────────────────────────────────────────────────────────

const outboundCompleted: Transaction = {
  id: 'txn-001',
  type: 'outbound',
  status: 'completed',
  amount: { value: -42.5, currency: 'EUR' },
  label: { name: 'Mercadona', imageUrl: 'https://cdn.brandfetch.io/domain/mercadona.com' },
  category: 'Supermercado',
  created_at: new Date('2026-09-14T10:23:00.000Z'),
  flagged: false,
};

const inboundCompleted: Transaction = {
  id: 'txn-002',
  type: 'inbound',
  status: 'completed',
  amount: { value: 2400.0, currency: 'EUR' },
  label: { name: 'Nómina Empresa S.L.', imageUrl: null },
  category: 'Nómina',
  created_at: new Date('2026-09-01T08:00:00.000Z'),
  flagged: false,
};

const outboundPending: Transaction = {
  id: 'txn-003',
  type: 'outbound',
  status: 'pending',
  amount: { value: -199.99, currency: 'EUR' },
  label: { name: 'Amazon', imageUrl: 'https://cdn.brandfetch.io/domain/amazon.com' },
  category: 'Compras online',
  created_at: new Date('2026-09-13T18:45:00.000Z'),
  flagged: false,
};

const flagged: Transaction = {
  id: 'txn-flagged',
  type: 'outbound',
  status: 'completed',
  amount: { value: -850.0, currency: 'EUR' },
  label: { name: 'Transferencia sospechosa', imageUrl: null },
  category: 'Transferencia',
  created_at: new Date('2026-09-12T22:10:00.000Z'),
  flagged: true,
};

const longName: Transaction = {
  id: 'txn-long',
  type: 'outbound',
  status: 'completed',
  amount: { value: -59.99, currency: 'EUR' },
  label: {
    name: 'Spotify - Membresía anual - Promoción 43455X9084L',
    imageUrl: 'https://cdn.brandfetch.io/domain/spotify.com',
  },
  category: 'Suscripciones',
  created_at: new Date('2026-09-10T00:00:00.000Z'),
  flagged: false,
};

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof TransactionItem> = {
  title: 'Transactions/TransactionItem',
  component: TransactionItem,
  decorators: [
    (Story) => (
      <View style={{ paddingHorizontal: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TransactionItem>;

// ─── Stories ─────────────────────────────────────────────────────────────────

export const OutboundCompleted: Story = {
  args: { item: outboundCompleted },
};

export const InboundCompleted: Story = {
  args: { item: inboundCompleted },
};

export const OutboundPending: Story = {
  args: { item: outboundPending },
};

export const Flagged: Story = {
  args: { item: flagged },
};

export const LongLabel: Story = {
  name: 'Label largo (truncado)',
  args: { item: longName },
};

export const NoImage: Story = {
  name: 'Sin imagen de marca',
  args: { item: inboundCompleted },
};

// Lista realista con varios estados mezclados
export const ListaSample: Story = {
  name: 'Lista — muestra realista',
  render: () => (
    <View>
      <TransactionItem item={inboundCompleted} />
      <TransactionItem item={outboundCompleted} />
      <TransactionItem item={outboundPending} />
      <TransactionItem item={flagged} />
      <TransactionItem item={longName} />
    </View>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <View style={{ paddingHorizontal: 16 }}>
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
    </View>
  ),
};
