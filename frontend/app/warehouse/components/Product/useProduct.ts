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
        router.navigate(`/product/delete?warehouseId=${warehouseId}&productId=${id}`);
    }, [id, warehouseId]);

    const onUpdate = React.useCallback(() => {
        router.navigate(`/product/edit?warehouseId=${warehouseId}&productId=${id}`);
    }, [id, warehouseId]);

    return {
        onDelete,
        onUpdate,
    }
}
