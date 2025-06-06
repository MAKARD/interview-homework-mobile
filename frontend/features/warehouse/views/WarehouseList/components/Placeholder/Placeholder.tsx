import * as React from 'react';
import { View } from 'react-native';

import { PlaceholderItem, ScreenWrapper } from '@/ui/components';

import { styles } from './styles';

export const Placeholder: React.FC = () => {
    return (
        <ScreenWrapper>
            <PlaceholderItem width="100%" height={42} />
            <View style={styles.list}>
                <PlaceholderItem width="100%" height={42} />
                <View style={styles.verticalMargin} />
                <PlaceholderItem width="100%" height={42} />
                <View style={styles.verticalMargin} />
                <PlaceholderItem width="100%" height={42} />
                <View style={styles.verticalMargin} />
                <PlaceholderItem width="100%" height={42} />
                <View style={styles.verticalMargin} />
                <PlaceholderItem width="100%" height={42} />
                <View style={styles.verticalMargin} />
                <PlaceholderItem width="100%" height={42} />
                <View style={styles.verticalMargin} />
                <PlaceholderItem width="100%" height={42} />
            </View>
        </ScreenWrapper>
    )
}
