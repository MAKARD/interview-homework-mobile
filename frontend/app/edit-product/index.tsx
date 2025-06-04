import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Loader } from '@/ui/components';

import { useEditProduct } from './useEditProduct';
import { EditForm } from './components/EditForm/EditForm';

const EditProduct: React.FC = () => {
    const {
        isLoading,
        onCancel,
        onProceed,
        imageUrl,
        productId
    } = useEditProduct();

    return (
        <View>
            {imageUrl && (
                <Image
                    source={{ uri: imageUrl }}
                />
            )}
            <EditForm
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

export default EditProduct;
