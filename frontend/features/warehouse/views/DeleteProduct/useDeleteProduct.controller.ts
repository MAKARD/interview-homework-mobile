import * as React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useWarehouse } from '../../stores/warehouse.store';

export const useDeleteProduct = () => {
    const router = useRouter();
    const params = useLocalSearchParams<{productId: string, warehouseId: string}>()

    const [isLoading, setLoading] = React.useState(false);

    const deleteProduct = useWarehouse((state) => state.deleteProduct);
    
    const onCancel = React.useCallback(() => {
        router.back();
    }, []);

    const onProceed = React.useCallback(async () => {
        setLoading(true);

        await deleteProduct(params.warehouseId, params.productId);

        setLoading(false);
    }, [params.productId, params.warehouseId]);

    return {
        onProceed,
        onCancel,
        isLoading
    }
};
