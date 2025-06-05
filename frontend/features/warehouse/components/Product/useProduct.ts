import * as React from 'react';
import { useRouter } from 'expo-router';

interface Params {
    id: string;
    warehouseId: string;
}

export const useProduct = ({
    id,
    warehouseId
}: Params) => {
    const router = useRouter();

    const onDelete = React.useCallback(() => {
        router.navigate(`/warehouse/${warehouseId}/product/${id}/delete`);
    }, [id, warehouseId]);

    const onUpdate = React.useCallback(() => {
        router.navigate(`/warehouse/${warehouseId}/product/${id}/edit`);
    }, [id, warehouseId]);

    return {
        onDelete,
        onUpdate,
    }
}
