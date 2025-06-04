import * as React from 'react';

interface Props {
    id: string;
    imageUrl?: string;
    name: string;
    description: string;
    quantity: number;
    unitPrice: number;
    warehouseId: string;
}

export const Product: React.FC<Props> = () => {
    return null;
}

