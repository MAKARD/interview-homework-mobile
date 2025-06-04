import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Placeholder, Shipment } from './components';

import { useShipments } from './useShipments';
import { styles } from './styles';

const Shipments: React.FC = () => {
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

export default Shipments;
