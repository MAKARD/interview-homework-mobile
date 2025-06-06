import * as React from 'react';
import { TextInput, View } from 'react-native';

import { Text } from '@/ui/components';

import { styles } from './styles';

interface Props {
    label: string;
    onChange: (text: string) => void;
    type: 'numeric' | 'text';
    defaultValue: string | number;
}

export const ProductInput: React.FC<Props> = ({
    label,
    onChange,
    type,
    defaultValue
}) => {
    return (
        <View style={styles.container}>
            <Text size='small'>
                {label}
            </Text>
            <TextInput
                onChangeText={onChange}
                style={styles.textInput}
                defaultValue={defaultValue.toString()}
                keyboardType={type === 'text' ? "default" : "numeric"}
            />
        </View>
    );
}
