import { createDrawerNavigator } from '@react-navigation/drawer';
import { PATH_HOME } from '@services/navigation';
import { MainTheme } from '@themes/Main';
import React from 'react';

import { Home } from '@screens/home';
import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function MainScreens() {
    return (
        <MainTheme>
            <Navigator
                initialRouteName={PATH_HOME}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_HOME} component={Home} options={styles.screenOptions} />
            </Navigator>
        </MainTheme>
    );
}
