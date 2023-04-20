// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useRpcClient } from '@mysten/core';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { TransactionFilter } from '@mysten/sui.js';

export const DEFAULT_TRANSACTIONS_LIMIT = 20;

// Fetch transaction blocks
export function useGetTransactionBlocks(
    filter?: TransactionFilter,
    limit = DEFAULT_TRANSACTIONS_LIMIT
) {
    const rpc = useRpcClient();

    return useInfiniteQuery(
<<<<<<< HEAD:apps/explorer/src/hooks/useGetTransactionBlocks.ts
        ['get-transaction-blocks', filter, limit],
=======
        ['get-transaction-blocks', address, filter, limit],
>>>>>>> main:apps/explorer/src/hooks/useGetTransactionBlocksForAddress.ts
        async ({ pageParam }) =>
            await rpc.queryTransactionBlocks({
                filter,
                cursor: pageParam,
                order: 'descending',
                limit,
                options: {
                    showEffects: true,
                    showBalanceChanges: true,
                    showInput: true,
                },
            }),
        {
            getNextPageParam: (lastPage) =>
                lastPage?.hasNextPage ? lastPage.nextCursor : false,
<<<<<<< HEAD:apps/explorer/src/hooks/useGetTransactionBlocks.ts
            staleTime: Infinity,
            cacheTime: 24 * 60 * 60 * 1000,
            retry: false,
            keepPreviousData: true,
=======
            enabled: !!address,
>>>>>>> main:apps/explorer/src/hooks/useGetTransactionBlocksForAddress.ts
        }
    );
}
