import * as React from 'react';
import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { Text } from '../Text';

interface Props {
    headerTitle?: string;
}

export const ScreenWrapper: React.FC<React.PropsWithChildren<Props>> = ({
    headerTitle,
    children
}) => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, router.canGoBack() && { paddingHorizontal: 20 }]}>
                {router.canGoBack() && (
                    <Pressable onPress={router.back} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </Pressable>
                )}
                {headerTitle && (
                    <Text size="large" numberOfLines={1} ellipsizeMode="tail" >
                        {headerTitle}
                    </Text>
                )}
            </View>
            {children}
        </SafeAreaView>
    )
}
