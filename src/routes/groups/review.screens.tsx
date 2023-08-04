import { createDrawerNavigator } from '@react-navigation/drawer';
import { Review } from '@screens/review';
import { PATH_REVIEW } from '@services/navigation';
import { ReviewTheme } from '@themes/Review';
import React from 'react';
import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function ReviewScreens() {
    return (
        <ReviewTheme>
            <Navigator screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_REVIEW} component={Review} />
            </Navigator>
        </ReviewTheme>
    );
}
