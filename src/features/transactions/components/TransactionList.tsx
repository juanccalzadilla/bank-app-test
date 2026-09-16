import { FlashList } from "@shopify/flash-list";
import { RefreshControl, View } from "react-native";
import TransactionListHeader from "./TransactionListHeader";
import { TransactionItem, TransactionItemSkeleton } from "./TransactionItem";
import { Transaction } from "../types/Transaction";
import { useFetchTransactionsQuery } from "../queries/trasactions.queries";
import TransactionListError from "./TransactionListError";

const skeletons = Array.from({ length: 8 }, (_, i) => ({
  id: `skeleton-${i}`,
}));

export default function TransactionList() {
  const {
    data,
    refetch,
    isRefetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
    isError,
  } = useFetchTransactionsQuery();

  const showInitialError = isError && !data;
  return (
    <FlashList
      className="w-full"
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      contentContainerStyle={{ paddingBottom: 0, paddingHorizontal: 0 }}
      data={isLoading ? skeletons : data?.pages.flatMap((page) => page.items)}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      getItemType={(_) => (isLoading ? "skeleton" : "transaction")}
      renderItem={({ item }) =>
        isLoading ? (
          <TransactionItemSkeleton />
        ) : (
          <TransactionItem item={item as Transaction} />
        )
      }
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />
      }
      ListHeaderComponent={TransactionListHeader}
      ListEmptyComponent={
        showInitialError ? (
          <TransactionListError
            message="No hemos podido cargar tus transacciones."
            onRetry={refetch}
          />
        ) : null
      }
      ListFooterComponent={
        isFetchingNextPage ? <TransactionItemSkeleton /> : null
      }
    />
  );
}
