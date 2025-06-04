import * as React from 'react';

import { useWarehouse } from '@/stores/warehouse.store';

interface ProductData {
    name: string;
    description: string;
    quantity: number;
    unitPrice: number;
    imageUrl: string;
}

export interface UseFormParams {
    productId?: string;
    onSave: (data: ProductData) => void;
}

export const useForm = ({
    onSave,
    productId
}: UseFormParams) => {
    const product = useWarehouse((state) => state.warehouseDetails?.products.find((product) => product.id === productId));

    const [values, setValues] = React.useState({
        name: product?.name || "",
        description: product?.description || "",
        quantity: product?.quantity || 0,
        unitPrice: product?.unitPrice || 0,
        imageUrl: product?.imageUrl || ""
    });

    const onChangeImage = React.useCallback(() => {

    }, []);

    const onChangeName = React.useCallback((name: string) => {
        setValues((state) => ({
            ...state,
            name,
        }))
    }, []);

    const onChangeDescription = React.useCallback((description: string) => {
        setValues((state) => ({
            ...state,
            description,
        }))
    }, []);

    const onChangeQuantity = React.useCallback((quantity: string) => {
        setValues((state) => ({
            ...state,
            quantity: Number(quantity),
        }))
    }, []);

    const onChangeUnitPrice = React.useCallback((price: string) => {
        setValues((state) => ({
            ...state,
            unitPrice: Number(price),
        }))
    }, []);


    const onSavePress = React.useCallback(() => {
        onSave(values)
    }, [values]);

    return {
        ...values,

        onChangeImage,
        onChangeName,
        onChangeDescription,
        onChangeQuantity,
        onChangeUnitPrice,
        onSavePress
    }
};