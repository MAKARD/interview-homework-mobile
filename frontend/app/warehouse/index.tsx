import * as React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Placeholder, Product } from './components';

import { useWarehouse } from './useWarehouse';
import { styles } from './styles';

const Warehouse: React.FC = () => {
    const {
        isLoading,
        products,
        warehouseId,
        onAddProduct
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

export default Warehouse;
