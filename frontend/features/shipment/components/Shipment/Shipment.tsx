import * as React from 'react';
import { View } from 'react-native';

import { Shipment as ShipmentModel } from '@/domain/models/Shipment.model';

import { Text } from '@/ui/components';

import { useShipment } from './useShipment';
import { styles } from './styles';
import { Product } from '../Product';

interface Props extends ShipmentModel { }

export const Shipment: React.FC<Props> = ({
    destination,
    products,
    createdAt,
    updatedAt,
    status,
}) => {
    const {
        createdDate,
        updatedDate,
        statusText
    } = useShipment({
        createdAt,
        updatedAt,
        status
    });

    return (
        <View style={styles.card}>
            <View style={styles.topContainer}>
                <View style={styles.badge}>
                    <Text size="small">
                        {statusText}
                    </Text>
                </View>
            </View>
            <Text size="medium">
                {destination}
            </Text>
            <Text size="small">
                Created {createdDate}
            </Text>
            <Text size="small">
                Last update {updatedDate}
            </Text>
            {products.map((product) => (
                <Product
                    id={product.id}
                    name={product.name}
                    key={product.id}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    quantity={product.quantity}
                    unitPrice={product.unitPrice}
                />
            ))}
        </View>
    );
}

