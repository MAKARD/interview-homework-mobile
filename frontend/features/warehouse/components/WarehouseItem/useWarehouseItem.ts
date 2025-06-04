import * as React from 'react';
import { useRouter } from 'expo-router';

interface Params {
    id: string;
    name: string;
}

export const useWarehouseItem = ({
    id,
    name
}: Params) => {
    const router = useRouter();

    const onPress = React.useCallback(() => {
        router.navigate(`/warehouse/${id}?name=${name}`);
    }, [id, name]);

    return {
        onPress
    }
}
