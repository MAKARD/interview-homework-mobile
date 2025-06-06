import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export const Loader: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    )
}
