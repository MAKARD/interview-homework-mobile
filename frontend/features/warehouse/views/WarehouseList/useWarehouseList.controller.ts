import * as React from 'react';

import { useWarehouse } from '../../stores/warehouse.store';

export const useWarehouseList = () => {
    const [isLoading, setLoading] = React.useState(true);

    const fetchWarehouses = useWarehouse((state) => state.fetchWarehouses);
    const warehouses = useWarehouse((state) => state.warehouses);

    React.useEffect(() => {
        fetchWarehouses().then(() => setLoading(false));
    }, []);

    return {
        isLoading,
        warehouses
    };
}
