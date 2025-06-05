import * as React from 'react';
import { Image, Pressable, View } from 'react-native';

import { Product as ProductModel } from '@/domain/models/Product.model';
import { useProduct } from './useProduct';
import { styles } from './styles';
import { Button, Text } from '@/ui/components';
import { Ionicons } from '@expo/vector-icons';

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
        <>
            <View style={styles.container}>
                {imageUrl && (
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                    />
                )}
                <View style={styles.mainText}>
                    <Text size="medium">
                        {name}
                    </Text>
                    <Text size='small'>
                        {description}
                    </Text>
                </View>
                <View style={styles.secondaryText}>
                    <Text size="medium">
                        x {quantity}
                    </Text>
                    <Text size="medium">
                        {unitPrice}$
                    </Text>
                </View>


                <Pressable onPress={onDelete}>
                    {/* <Text>Delete</Text> */}
                </Pressable>
                <Pressable onPress={onUpdate}>
                    {/* <Text>Update</Text> */}
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    variant="primary"
                    style={styles.button}
                    onPress={onDelete}
                >
                    <Ionicons name="trash" size={24} />
                </Button>
                <View style={styles.buttonsMargin}/>
                <Button
                    variant="primary"
                    style={styles.button}
                    onPress={onDelete}
                >
                    <Ionicons name="create-outline" size={24} />
                </Button>
            </View>
        </>
    );
}

