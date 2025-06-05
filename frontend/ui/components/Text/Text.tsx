import * as React from 'react';
import {Text as NativeText, TextProps } from 'react-native';
import { styles } from './styles';

interface Props extends Omit<TextProps, "style"> {
    size: "large" | "medium" | "small";
    variant?: "dark-background" | "light-background";
}

export const Text: React.FC<Props> = ({
    size,
    children,
    variant = "light-background",
    ...textProps
}) => {
    return (
        <NativeText
            style={[styles.sizes[size], styles.variants[variant]]}
            {...textProps}
        >
            {children}
        </NativeText>
    )
}
