import * as React from 'react';
import { useRouter } from 'expo-router';

interface Params {
    id: string;
}

export const useWarehouseItem = ({
    id
}: Params) => {
    const router = useRouter();

    const onPress = React.useCallback(() => {
        // router.navigate('/home')
    }, [id]);

    return {
        onPress
    }
}
