import * as React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useWarehouse } from '@/stores/warehouse.store';
import { EditProduct } from '@/domain/apis/product.api';

export const useEditProduct = () => {
    const router = useRouter();
    const params = useLocalSearchParams<{productId: string, warehouseId: string}>()

    const [isLoading, setLoading] = React.useState(false);

    const editProduct = useWarehouse((state) => state.editProduct);
    const product = useWarehouse(
        (state) => state.warehouseDetails?.products.find((product) => product.id === params.productId)
    );
    
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

        setLoading(false);
    }, [params.productId, params.warehouseId]);

    return {
        onProceed,
        onCancel,
        isLoading,
        imageUrl: product?.imageUrl,
        productId: product?.id || ""
    }
};
