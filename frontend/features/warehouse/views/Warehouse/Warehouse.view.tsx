import * as React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Product } from '../../components';

import { useWarehouse } from './useWarehouse.controller';
import { Placeholder } from './components';
import { styles } from './styles';

export const Warehouse: React.FC = () => {
    const {
        isLoading,
        products,
        warehouseId,
        onAddProduct,
        onViewShipments
    } = useWarehouse();

    if (isLoading) {
        return (
            <Placeholder />
        )
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={onAddProduct}>
                <Text>
                    Add product
                </Text>
            </Pressable>
            <Pressable onPress={onViewShipments}>
                <Text>
                    View shipments
                </Text>
            </Pressable>
            <ScrollView>
                {products.map((product) => (
                    <Product
                        id={product.id}
                        warehouseId={warehouseId}
                        name={product.name}
                        key={product.id}
                        imageUrl={product.imageUrl}
                        description={product.description}
                        quantity={product.quantity}
                        unitPrice={product.unitPrice}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
