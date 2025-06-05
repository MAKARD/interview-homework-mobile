import * as React from 'react';
import { DimensionValue, View } from 'react-native';

import { styles } from './styles';

interface PlaceholderItem {
    width: DimensionValue;
    height: DimensionValue;
}

export const PlaceholderItem: React.FC<PlaceholderItem> = ({
    width,
    height
}) => {
    return (
        <View style={[styles.wrapper, { width, height }]} />
    )
}