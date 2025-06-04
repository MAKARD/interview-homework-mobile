import * as React from 'react';
import { Pressable, Text } from 'react-native';

import { useWarehouse } from './useWarehouse';

interface Props {
    id: string;
    name: string;
}

export const Warehouse: React.FC<Props> = ({
    id,
    name
}) => {
    const { onPress } = useWarehouse({ id });

    return (
        <Pressable onPress={onPress}>
            <Text>
                {name}
            </Text>
        </Pressable>
    );
}

