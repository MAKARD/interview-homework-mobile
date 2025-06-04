import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Loader } from '@/ui/components';
import { Form } from '../components';

import { useCreateProduct } from './useCreateProduct';

const CreateProduct: React.FC = () => {
    const {
        isLoading,
        onCancel,
        onProceed,
    } = useCreateProduct();

    return (
        <View>
            <Form onSave={onProceed} />
            <Pressable onPress={onCancel}>
                <Text>Cancel</Text>
            </Pressable>
            {isLoading && <Loader />}
        </View>
    )
}

export default CreateProduct;
