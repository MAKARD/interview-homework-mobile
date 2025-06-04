import * as React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useWarehouse } from '@/stores/warehouse.store';
import { CreateProduct } from '@/domain/apis/product.api';

export const useCreateProduct = () => {
    const router = useRouter();
    const params = useLocalSearchParams<{warehouseId: string}>()

    const [isLoading, setLoading] = React.useState(false);

    const createProduct = useWarehouse((state) => state.createProduct);
    
    const onCancel = React.useCallback(() => {
        router.back();
    }, []);

    const onProceed = React.useCallback(async (data: CreateProduct.RequestDTO) => {
        setLoading(true);

        await createProduct(
            params.warehouseId,
            data
        );

        setLoading(false);
    }, [params.warehouseId]);

    return {
        onProceed,
        onCancel,
        isLoading,
    }
};
