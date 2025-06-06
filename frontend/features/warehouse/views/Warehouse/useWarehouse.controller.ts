import * as React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useWarehouse as useWarehouseStore } from '../../stores/warehouse.store';

export const useWarehouse = () => {
    const params = useLocalSearchParams<{ warehouseId: string, name: string }>();
    const router = useRouter();
    
    const [isLoading, setLoading] = React.useState(true);

    const fetchWarehouseDetails = useWarehouseStore((state) => state.fetchWarehouseDetails);
    const products = useWarehouseStore((state) => state.warehouseDetails?.products) || [];

    React.useEffect(() => {
        fetchWarehouseDetails(params.warehouseId).then(() => setLoading(false));
    }, [params.warehouseId]);

    const onAddProduct = React.useCallback(() => {
        router.navigate(`/warehouse/${params.warehouseId}/product/create`);
    }, [params.warehouseId]);

    const onViewShipments = React.useCallback(() => {
        router.navigate(`/warehouse/${params.warehouseId}/shipments`);
    }, [params.warehouseId]);

    return {
        isLoading,
        products,
        warehouseId: params.warehouseId,
        onAddProduct,
        onViewShipments,
        warehouseName: params.name,
    }
};
