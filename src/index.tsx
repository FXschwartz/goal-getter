import React from 'react';
import { View,Text } from 'react-native';

import Navigator from './navigations/index';
import AppHeader from './components/organisms/header';

const App = () => {
    return (
        <>
            <AppHeader />
            <Navigator />
        </>
    );
}
export default App;