import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Loader } from '@/ui/components';

import { Form } from '../../components';

import { useEditProduct } from './useEditProduct.controller';
import { styles } from './styles';

export const EditProduct: React.FC = () => {
    const {
        isLoading,
        onCancel,
        onProceed,
        productId
    } = useEditProduct();

    return (
        <View style={styles.container}>
            <Form
                productId={productId}
                onSave={onProceed}
            />
            <Pressable onPress={onCancel}>
                <Text>Cancel</Text>
            </Pressable>
            {isLoading && <Loader />}
        </View>
    )
}
