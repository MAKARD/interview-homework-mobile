import * as React from 'react';
import { Pressable, View } from 'react-native';

import { Button, Loader, ModalWrapper, Text } from '@/ui/components';

import { useDeleteProduct } from './useDeleteProduct.controller';
import { styles } from './styles';

export const DeleteProduct: React.FC = () => {
    const {
        isLoading,
        onCancel,
        onProceed
    } = useDeleteProduct();

    return (
        <ModalWrapper>
            <View>
                <Text size="medium" style={styles.title}>
                    Are you sure you want to delete the product?
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        variant="secondary"
                        onPress={onProceed}
                        style={styles.button}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="primary"
                        onPress={onCancel}
                        style={styles.button}
                    >
                        Cancel
                    </Button>
                </View>
                {isLoading && <Loader />}
            </View>
        </ModalWrapper>
    )
}
