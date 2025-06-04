import * as React from 'react';
import { Pressable, Text } from 'react-native';

import { ProductInput } from '../ProductInput';
import { useEditForm, UseEditFormParams } from './useEditForm';

interface Props extends UseEditFormParams {}

export const EditForm: React.FC<Props> = ({
    onSave,
    productId
}) => {
    const {
        name,
        description,
        quantity,
        unitPrice,
        onChangeImage,
        onChangeName,
        onChangeDescription,
        onChangeQuantity,
        onChangeUnitPrice,
        onSavePress
    } = useEditForm({ onSave, productId });

    return (
        <>
            <ProductInput
                label="name"
                onChange={onChangeName}
                type="text"
                defaultValue={name}
            />
            <ProductInput
                label="description"
                onChange={onChangeDescription}
                type="text"
                defaultValue={description}
            />
            <ProductInput
                label="quantity"
                onChange={onChangeQuantity}
                type="numeric"
                defaultValue={quantity}
            />
            <ProductInput
                label="price"
                onChange={onChangeUnitPrice}
                type="numeric"
                defaultValue={unitPrice}
            />
            <Pressable onPress={onChangeImage}>
                <Text>Change image</Text>
            </Pressable>
            <Pressable onPress={onSavePress}>
                <Text>Save</Text>
            </Pressable>
        </>
    )
};
