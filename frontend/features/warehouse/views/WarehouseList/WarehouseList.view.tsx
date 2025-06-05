import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { WarehouseItem } from '../../components';

import { useWarehouseList } from './useWarehouseList.controller';
import { Placeholder } from './components';
import { styles } from './styles';

export const WarehouseList: React.FC = () => {
    const {
        isLoading,
        warehouses
    } = useWarehouseList();

    if (isLoading) {
        return (
            <Placeholder />
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {warehouses.map((warehouse) => (
                    <WarehouseItem
                        id={warehouse.id}
                        name={warehouse.name}
                        key={warehouse.id}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
