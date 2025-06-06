import * as React from 'react';
import { View } from 'react-native';

import { PlaceholderItem, ScreenWrapper } from '@/ui/components';

import { styles } from './styles';

const Card: React.FC = () => (
    <>
        <View style={styles.card}>
            <PlaceholderItem width={90} height={90} />
            <View style={styles.mainText}>
                <PlaceholderItem width="50%" height={25} />
                <PlaceholderItem width="90%" height={18} />
            </View>
            <View style={styles.secondaryText}>
                <PlaceholderItem width="60%" height={25} />
                <PlaceholderItem width="40%" height={18} />
            </View>
        </View>
        <View style={styles.buttonsContainer}>
            <PlaceholderItem width="47%" height={40} />
            <PlaceholderItem width="47%" height={40} />
        </View>
    </>
)

export const Placeholder: React.FC = () => {
    return (
        <ScreenWrapper>
            <PlaceholderItem width="100%" height={42} />
            <View style={styles.buttonsContainer}>
                <PlaceholderItem width="45%" height={40} />
                <PlaceholderItem width="45%" height={40} />
            </View>
            <Card />
            <View style={styles.verticalMargin} />
            <Card />
            <View style={styles.verticalMargin} />
            <Card />
        </ScreenWrapper>
    )
}
