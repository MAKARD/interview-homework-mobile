import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Product } from '../../components';

import { useWarehouse } from './useWarehouse.controller';
import { Placeholder } from './components';
import { styles } from './styles';
import { Button, ScreenWrapper } from '@/ui/components';

export const Warehouse: React.FC = () => {
    const {
        isLoading,
        products,
        warehouseId,
        onAddProduct,
        onViewShipments,
        warehouseName
    } = useWarehouse();

    if (isLoading) {
        return (
            <Placeholder />
        )
    }

    return (
        <ScreenWrapper headerTitle={warehouseName}>
            <View style={styles.topButtons}>
                <Button
                    onPress={onAddProduct}
                    variant="secondary"
                    style={styles.topButton}
                >
                    Add product
                </Button>
                <Button
                    onPress={onViewShipments}
                    variant="secondary"
                    style={styles.topButton}
                >
                    View shipments
                </Button>
            </View>
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
        </ScreenWrapper>
    );
}
