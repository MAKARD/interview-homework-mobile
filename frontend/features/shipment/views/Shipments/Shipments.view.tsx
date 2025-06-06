import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Shipment } from '../../components';

import { useShipments } from './useShipments.controller';
import { Placeholder } from './components';
import { styles } from './styles';
import { ScreenWrapper } from '@/ui/components';

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
        <ScreenWrapper headerTitle='Shipments'>
            <ScrollView
                style={styles.list}
            >
                {shipments.map((shipment) => (
                    <Shipment
                        id={shipment.id}
                        key={shipment.id}
                        warehouseId={shipment.warehouseId}
                        destination={shipment.destination}
                        products={shipment.products}
                        createdAt={shipment.createdAt}
                        updatedAt={shipment.updatedAt}
                        status={shipment.status}
                        notes={shipment.notes}
                    />
                ))}
            </ScrollView>
        </ScreenWrapper>
    );
}
