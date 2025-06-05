import * as React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { EditProduct } from '@/domain/apis/product.api';

import { useWarehouse } from '../../stores/warehouse.store';

export const useEditProduct = () => {
    const router = useRouter();
    const params = useLocalSearchParams<{productId: string, warehouseId: string}>()

    const [isLoading, setLoading] = React.useState(false);

    const editProduct = useWarehouse((state) => state.editProduct);
    
    const onCancel = React.useCallback(() => {
        router.back();
    }, []);

    const onProceed = React.useCallback(async (data: EditProduct.RequestDTO) => {
        setLoading(true);

        await editProduct(
            params.warehouseId,
            params.productId,
            data
        );

        router.back();
    }, [params.productId, params.warehouseId]);

    return {
        onProceed,
        onCancel,
        isLoading,
        productId: params.productId,
    }
};
