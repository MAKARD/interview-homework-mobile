import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export const ScreenWrapper: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}
