import * as React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useWarehouse as useWarehouseStore } from '@/stores/warehouse.store';

export const useWarehouse = () => {
    const params = useLocalSearchParams<{ id: string, name: string }>();
    const router = useRouter();
    
    const [isLoading, setLoading] = React.useState(true);

    const fetchWarehouseDetails = useWarehouseStore((state) => state.fetchWarehouseDetails);
    const products = useWarehouseStore((state) => state.warehouseDetails?.products || []);

    React.useEffect(() => {
        fetchWarehouseDetails(params.id).then(() => setLoading(false));
    }, [params.id]);

    const onAddProduct = React.useCallback(() => {
        router.navigate(`/product/create?warehouseId=${params.id}`);
    }, [params.id]);

    return {
        isLoading,
        products,
        warehouseId: params.id,
        onAddProduct
    }
};
