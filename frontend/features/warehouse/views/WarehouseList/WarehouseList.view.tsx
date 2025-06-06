import * as React from 'react';
import { ScrollView } from 'react-native';

import { Text, ScreenWrapper } from '@/ui/components';

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
        return <Placeholder />;
    }

    return (
        <ScreenWrapper headerTitle='Available warehouses'>
            <ScrollView
                style={styles.list}
            >
                {warehouses.map((warehouse) => (
                    <WarehouseItem
                        id={warehouse.id}
                        name={warehouse.name}
                        key={warehouse.id}
                    />
                ))}
            </ScrollView>
               
        </ScreenWrapper>
    );
}
