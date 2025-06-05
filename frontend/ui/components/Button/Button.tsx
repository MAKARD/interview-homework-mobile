import * as React from 'react';
import { Pressable } from 'react-native';

import { Text } from '../Text';
import { styles } from './styles';

interface Props {
    children: string;
    onPress: () => void;
    variant: "primary" | "secondary";
}

export const Button: React.FC<Props> = ({
    children,
    onPress,
    variant
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.base.wrapper, styles.type[variant]]}
        >
            <Text size="medium">
                {children}
            </Text>
        </Pressable>
    )
}
