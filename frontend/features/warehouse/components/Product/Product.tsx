import * as React from 'react';
import { Product as ProductModel } from '@/domain/models/Product.model';

interface Props extends ProductModel {
    warehouseId: string;
}

export const Product: React.FC<Props> = () => {
    return null;
}

