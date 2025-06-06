import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button, Text } from '@/ui/components';
import { Colors } from '@/ui/constants/Colors';

import { ProductInput } from '../ProductInput';
import { useForm, UseFormParams } from './useForm';
import { styles } from './styles';

interface Props extends UseFormParams { }

export const Form: React.FC<Props> = ({
    onSave,
    productId
}) => {
    const {
        name,
        description,
        quantity,
        unitPrice,
        onChangeImage,
        onChangeName,
        onChangeDescription,
        onChangeQuantity,
        onChangeUnitPrice,
        onSavePress,
        imageUrl
    } = useForm({ onSave, productId });

    return (
        <>
            <ProductInput
                label="Name"
                onChange={onChangeName}
                type="text"
                defaultValue={name}
            />
            <ProductInput
                label="Description"
                onChange={onChangeDescription}
                type="text"
                defaultValue={description}
            />
            <ProductInput
                label="Quantity"
                onChange={onChangeQuantity}
                type="numeric"
                defaultValue={quantity}
            />
            <ProductInput
                label="Price"
                onChange={onChangeUnitPrice}
                type="numeric"
                defaultValue={unitPrice}
            />
            <View style={styles.imageGroup}>
                {imageUrl && (
                    <>
                        <ImageBackground
                            source={{ uri: imageUrl }}
                            style={styles.image}

                        >
                            <Button
                                variant="secondary"
                                onPress={onChangeImage}
                                style={styles.changeButton}
                            >
                                <Ionicons name="create" size={24} color={Colors.light.background} />
                            </Button>
                        </ImageBackground>
                        <Text size='small'>
                            Press to change
                        </Text>
                    </>
                )}
                {!imageUrl && (
                    <Button
                        variant="secondary"
                        onPress={onChangeImage}
                        style={styles.addButton}
                    >
                        <View style={styles.addButtonContent}>
                            <Ionicons name="add" size={50} color={Colors.light.text} />
                            <Text size='small'>
                                Add image
                            </Text>
                        </View>
                    </Button>
                )}
            </View>
            <Button variant="primary" onPress={onSavePress}>
                Save
            </Button>
        </>
    )
};
