import React from 'react';
import { View,Text } from 'react-native';

import Navigator from '_navigations';
import AppHeader from '_components/organisms/header';

const App = () => {
    return (
        <>
            <AppHeader />
            <Navigator />
        </>
    );
}
export default App;