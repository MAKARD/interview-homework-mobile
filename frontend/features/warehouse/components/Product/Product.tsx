import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Product as ProductModel } from '@/domain/models/Product.model';
import { useProduct } from './useProduct';
import { styles } from './styles';

interface Props extends ProductModel {
    warehouseId: string;
}

export const Product: React.FC<Props> = ({
    id,
    imageUrl,
    name,
    description,
    quantity,
    unitPrice,
    warehouseId
}) => {
    const {
        onDelete,
        onUpdate
    } = useProduct({ id, warehouseId });

    return (
        <View>
            <View>
                {imageUrl && (
                    <Image
                        source={{uri: imageUrl}}
                        style={styles.image}
                    />
                )}
                <Text>[{id}]{name} - {description} x {quantity} by {unitPrice}$</Text>
                <Pressable onPress={onDelete}>
                    <Text>Delete</Text>
                </Pressable>
                <Pressable onPress={onUpdate}>
                    <Text>Update</Text>
                </Pressable>
            </View>
        </View>
    );
}

