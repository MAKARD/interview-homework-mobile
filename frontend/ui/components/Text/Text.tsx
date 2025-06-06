import * as React from 'react';
import {Text as NativeText, TextProps } from 'react-native';
import { styles } from './styles';

interface Props extends TextProps {
    size: "large" | "medium" | "small";
    variant?: "dark-background" | "light-background";
}

export const Text: React.FC<Props> = ({
    size,
    children,
    variant = "light-background",
    style,
    ...textProps
}) => {
    return (
        <NativeText
            style={[styles.sizes[size], styles.variants[variant], style]}
            {...textProps}
        >
            {children}
        </NativeText>
    )
}
