import { createDrawerNavigator } from '@react-navigation/drawer';
import { PATH_HOME, PATH_REVIEW } from '@services/navigation';
import { MainTheme } from '@themes/Main';
import React from 'react';

import { Home } from '@screens/home';
import { Review } from '@screens/review';
import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function MainScreens() {
    return (
        <MainTheme>
            <Navigator
                initialRouteName={PATH_REVIEW}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_HOME} component={Home} />
                <Screen name={PATH_REVIEW} component={Review} />
            </Navigator>
        </MainTheme>
    );
}
