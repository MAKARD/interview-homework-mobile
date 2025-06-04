import * as React from 'react';
import { useLocalSearchParams } from 'expo-router';

import { useShipment } from '@/stores/shipment.store';

export const useShipments = () => {
    const params = useLocalSearchParams<{ warehouseId: string }>();
    
    const [isLoading, setLoading] = React.useState(true);

    const fetchShipmentsInWarehouse = useShipment((state) => state.fetchShipmentsInWarehouse);
    const shipments = useShipment((state) => state.shipments)

    React.useEffect(() => {
        fetchShipmentsInWarehouse(params.warehouseId).then(() => setLoading(false));
    }, [params.warehouseId]);

    return {
        isLoading,
        shipments,
    }
};
