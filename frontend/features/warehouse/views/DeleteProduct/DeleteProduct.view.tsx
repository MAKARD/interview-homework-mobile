import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Loader } from '@/ui/components';

import { useDeleteProduct } from './useDeleteProduct.controller';

export const DeleteProduct: React.FC = () => {
    const {
        isLoading,
        onCancel,
        onProceed
    } = useDeleteProduct();

    return (
        <View>
            <Pressable onPress={onProceed}>
                <Text>Delete</Text>
            </Pressable>
            <Pressable onPress={onCancel}>
                <Text>Cancel</Text>
            </Pressable>
            {isLoading && <Loader />}
        </View>
    )
}
