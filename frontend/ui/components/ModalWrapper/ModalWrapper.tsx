import * as React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export const ModalWrapper: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    return (
        <View style={styles.background}>
            <View style={styles.body}>
                {children}
            </View>
        </View>
    )
}
