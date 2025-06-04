import * as React from 'react';
import { Text, View } from 'react-native';

import { Shipment as ShipmentModel } from '@/domain/models/Shipment.model';
import { ShipmenItem } from '../ShipmentItem';

interface Props extends ShipmentModel {
}

export const Shipment: React.FC<Props> = ({
    id,
    warehouseId,
    destination,
    items,
    createdAt,
    updatedAt,
    status,
    notes,
}) => {

    return (
        <View>
            <Text>
                {destination}
            </Text>
            {items.map((item) => (
                <ShipmenItem
                    id={item.id}
                    key={item.id}
                    quantity={item.quantity}
                    products={item.products}
                />
            ))}
        </View>
    );
}

