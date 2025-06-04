import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Placeholder, WarehouseItem } from './components';

import { useWarehouseList } from './useWarehouseList';
import { styles } from './styles';

const WarehouseList: React.FC = () => {
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

export default WarehouseList;
