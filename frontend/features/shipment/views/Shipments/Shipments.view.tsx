import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Shipment } from '../../components';

import { useShipments } from './useShipments.controller';
import { Placeholder } from './components';
import { styles } from './styles';

export const Shipments: React.FC = () => {
    const {
        isLoading,
        shipments
    } = useShipments();

    if (isLoading) {
        return (
            <Placeholder />
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {shipments.map((shipment) => (
                    <Shipment
                        id={shipment.id}
                        key={shipment.id}
                        warehouseId={shipment.warehouseId}
                        destination={shipment.destination}
                        items={shipment.items}
                        createdAt={shipment.createdAt}
                        updatedAt={shipment.updatedAt}
                        status={shipment.status}
                        notes={shipment.notes}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
