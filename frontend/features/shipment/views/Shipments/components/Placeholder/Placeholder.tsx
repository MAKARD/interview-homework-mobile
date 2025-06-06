import * as React from 'react';
import { View } from 'react-native';

import { PlaceholderItem, ScreenWrapper } from '@/ui/components';

import { styles } from './styles';

const Card: React.FC = () => (
    <>
        <View style={styles.badge}>
            <PlaceholderItem width={75} height={30} />
        </View>
        <PlaceholderItem width={300} height={20} />
        <View style={styles.createdDate}>
            <PlaceholderItem width={170} height={14} />
        </View>
        <PlaceholderItem width={180} height={13} />
        <View style={styles.product}>
            <PlaceholderItem width={130} height={28} />
        </View>
        <View style={styles.product}>
            <PlaceholderItem width={130} height={28} />
        </View>
        <View style={styles.product}>
            <PlaceholderItem width={130} height={28} />
        </View>
    </>
)

export const Placeholder: React.FC = () => {
    return (
        <ScreenWrapper>
            <PlaceholderItem width="100%" height={42} />
            <Card />
            <Card />
            <Card />
        </ScreenWrapper>
    )
}
