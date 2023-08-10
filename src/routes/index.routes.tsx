import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreens } from '@routes/groups/main.screens';
import React from 'react';
import { AccountScreens } from './groups/account.screens';
import { ReviewScreens } from './groups/review.screens';
import { styles } from './styles.routes';

const {Navigator, Screen} = createDrawerNavigator();

export function Routes() {
  return (
    <Navigator
      initialRouteName={RouteOptions.main}
      screenOptions={styles.drawerScreenOptions}>
      <Screen
        name={RouteOptions.main}
        component={MainScreens}
        options={styles.screenOptions}
      />
      <Screen
        name={RouteOptions.account}
        component={AccountScreens}
        options={styles.screenOptions}
      />
      <Screen
        name={RouteOptions.activity}
        component={ReviewScreens}
        options={styles.screenOptions}
      />
    </Navigator>
  );
}
