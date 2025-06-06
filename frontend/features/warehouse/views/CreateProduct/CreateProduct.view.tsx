import * as React from 'react';
import { View } from 'react-native';

import { Button, Loader, ModalWrapper } from '@/ui/components';

import { Form } from '../../components';

import { useCreateProduct } from './useCreateProduct.controller';
import { styles } from './styles';

export const CreateProduct: React.FC = () => {
    const {
        isLoading,
        onCancel,
        onProceed,
    } = useCreateProduct();

    return (
        <ModalWrapper>
            <View>
                <Form onSave={onProceed} />
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
