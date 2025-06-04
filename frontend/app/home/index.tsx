import * as React from 'react';
import { Text, View } from 'react-native';

import { useHome } from './useHome';

const Home: React.FC = () => {
    const {} = useHome();

    return (
        <View>
            <Text>home</Text>
        </View>
    );
}

export default Home;
