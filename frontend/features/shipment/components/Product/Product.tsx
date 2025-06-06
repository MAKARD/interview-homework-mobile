import * as React from 'react';
import { Image, View } from 'react-native';

import { Product as ProductModel } from '@/domain/models/Product.model';

import { styles } from './styles';
import { Text } from '@/ui/components';

interface Props extends ProductModel { }

export const Product: React.FC<Props> = ({
    imageUrl,
    quantity,
    name
}) => {
    return (
        <View style={styles.card}>
            {imageUrl && (
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />
            )}
            <View>
                <Text size='small'>
                    {name} x {quantity}
                </Text>
            </View>
        </View>
    );
}

