import * as React from 'react';
import { Pressable, View } from 'react-native';

import { useWarehouseItem } from './useWarehouseItem';
import { styles } from './styles';
import { Button, Text } from '@/ui/components';

interface Props {
    id: string;
    name: string;
}

export const WarehouseItem: React.FC<Props> = ({
    id,
    name
}) => {
    const { onPress } = useWarehouseItem({ id, name });

    return (
        <View style={styles.wrapper}>
            <Button
                onPress={onPress}
                variant="primary"
            >
                {name}
            </Button>
        </View>
    );
}

