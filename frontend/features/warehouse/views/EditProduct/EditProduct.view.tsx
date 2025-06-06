import * as React from 'react';
import { View } from 'react-native';

import { Button, Loader, ModalWrapper } from '@/ui/components';

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
        <ModalWrapper>
            <View>
                <Form
                    onSave={onProceed}
                    productId={productId}
                />
                <Button
                    style={styles.cancelButton}
                    variant="secondary"
                    onPress={onCancel}
                >
                    Cancel
                </Button>
                {isLoading && <Loader />}
            </View>
        </ModalWrapper>
    )
}
