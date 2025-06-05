import * as React from 'react';
import {Text as NativeText} from 'react-native';
import { styles } from './styles';

interface Props {
    size: "large" | "medium" | "small";
    variant?: "dark-background" | "light-background";
    children: string;
}

export const Text: React.FC<Props> = ({
    size,
    children,
    variant = "light-background"
}) => {
    return (
        <NativeText
            style={[styles.sizes[size], styles.variants[variant]]}
        >
            {children}
        </NativeText>
    )
}
