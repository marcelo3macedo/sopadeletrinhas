import { createDrawerNavigator } from '@react-navigation/drawer';
import { ConfigScreen } from '@screens/account/config';
import { PATH_CONFIG } from '@services/navigation';
import { MainTheme } from '@themes/Main';
import React from 'react';
import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function AccountScreens() {
    return (
        <MainTheme>
            <Navigator screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_CONFIG} component={ConfigScreen} />
            </Navigator>
        </MainTheme>
    );
}
