import { createDrawerNavigator } from '@react-navigation/drawer';
import { PATH_ABOUTUS, PATH_ANIMALS, PATH_HOME, PATH_PRIVACYPOLICY } from '@services/navigation';
import { MainTheme } from '@themes/Main';
import React from 'react';

import { AboutUs } from '@screens/aboutUs';
import { Animals } from '@screens/animals';
import { Home } from '@screens/home';
import { PrivacyPolicy } from '@screens/privacyPolicy';
import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function MainScreens() {
    return (
        <MainTheme>
            <Navigator
                initialRouteName={PATH_HOME}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_HOME} component={Home} options={styles.screenOptions} />
                <Screen name={PATH_ANIMALS} component={Animals} options={styles.screenOptions} />
                <Screen name={PATH_ABOUTUS} component={AboutUs} options={styles.screenOptions} />
                <Screen name={PATH_PRIVACYPOLICY} component={PrivacyPolicy} options={styles.screenOptions} />
            </Navigator>
        </MainTheme>
    );
}
