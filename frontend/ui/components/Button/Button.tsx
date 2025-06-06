import * as React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { styles } from './styles';

interface Props extends Omit<PressableProps, "children" | "style"> {
    variant: "primary" | "secondary";
    size?: "medium" | "small";
    style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    variant,
    style,
    size = "medium",
    ...pressableProps
}) => {
    return (
        <Pressable
            style={[styles.base.wrapper, styles.type[variant], style]}
            {...pressableProps}
        >
            <Text size={size}>
                {children}
            </Text>
        </Pressable>
    )
}
