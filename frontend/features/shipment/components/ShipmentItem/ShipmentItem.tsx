import * as React from 'react';
import { Text, View } from 'react-native';

import { ShipmentItem as ShipmentItemModel } from '@/domain/models/ShipmentItem.model';
import { Product } from '../Product';

interface Props extends ShipmentItemModel {
}

export const ShipmenItem: React.FC<Props> = ({
    id,
    quantity,
    products
}) => {

    return (
        <View>
            <Text>
                {quantity}
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

