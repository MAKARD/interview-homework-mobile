import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { Placeholder, Warehouse } from './components';

import { useHome } from './useHome';
import { styles } from './styles';

const Home: React.FC = () => {
    const {
        isLoading,
        warehouses
    } = useHome();

    if (isLoading) {
        return (
            <Placeholder />
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {warehouses.map((warehouse) => (
                    <Warehouse
                        id={warehouse.id}
                        name={warehouse.name}
                        key={warehouse.id}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default Home;
