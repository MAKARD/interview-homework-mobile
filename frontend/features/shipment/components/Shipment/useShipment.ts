import { Shipment } from '@/domain/models/Shipment.model';
import * as React from 'react';

interface Params {
    createdAt: number;
    updatedAt: number;
    status: Shipment['status'];
}

export const useShipment = ({
    createdAt,
    updatedAt,
    status
}: Params) => {
    const createdDate = React.useMemo(() => new Date(createdAt).toDateString(), [createdAt]);
    const updatedDate = React.useMemo(() => new Date(updatedAt).toDateString(), [updatedAt]);

    const statusText = React.useMemo(() => {
        return {
            pending: 'Pending',
            in_transit: 'In transit',
            delivered: 'Delivered',
            cancelled: 'Cancelled'
        }[status]
    }, [status]);

    return {
        createdDate,
        updatedDate,
        statusText
    }
}