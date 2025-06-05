import * as React from 'react';
import { Image, Pressable, Text } from 'react-native';

import { ProductInput } from '../ProductInput';
import { useForm, UseFormParams } from './useForm';
import { styles } from './styles';

interface Props extends UseFormParams { }

export const Form: React.FC<Props> = ({
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
        onSavePress,
        imageUrl
    } = useForm({ onSave, productId });

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
            {imageUrl && (
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />
            )}
            <Pressable onPress={onChangeImage}>
                <Text>Change image</Text>
            </Pressable>
            <Pressable onPress={onSavePress}>
                <Text>Save</Text>
            </Pressable>
        </>
    )
};
