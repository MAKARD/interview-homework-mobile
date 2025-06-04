import * as React from 'react';
import { Pressable, Text } from 'react-native';

import { useWarehouseItem } from './useWarehouseItem';

interface Props {
    id: string;
    name: string;
}

export const WarehouseItem: React.FC<Props> = ({
    id,
    name
}) => {
    const { onPress } = useWarehouseItem({ id });

    return (
        <Pressable onPress={onPress}>
            <Text>
                {name}
            </Text>
        </Pressable>
    );
}

