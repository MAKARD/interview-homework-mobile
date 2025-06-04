import * as React from 'react';

import { Redirect } from 'expo-router';

const Index: React.FC = () => {
    return <Redirect href="/home" />;
}

export default Index;
