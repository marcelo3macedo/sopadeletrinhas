
import ListIcon from '@assets/icons/list.svg';
import LogoIcon from '@assets/logos/logo.png';
import { Icon } from '@components/elements/images/Icon';
import { HeaderLogoImage } from '@components/elements/images/headerLogo';
import { Styles } from '@interfaces/images/IconProps';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { PATH_ANIMALS, PATH_HOME } from '@services/navigation';
import { navigate } from '@services/navigation/root';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { style } from './styles';

export function MenuHeader() {
    const navigation = useNavigation();

    function goToHome() {
        navigate(RouteOptions.main, { screen: PATH_HOME });
    }

    function goToAnimals() {
        navigate(RouteOptions.main, { screen: PATH_ANIMALS });
    }

    function openMenu() {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.header} onPress={openMenu}>
                <Icon source={ListIcon} styled={Styles.Large}  />
            </TouchableOpacity>
            <View style={style.image}>
                <TouchableOpacity onPress={goToHome}>
                    <HeaderLogoImage source={LogoIcon} />
                </TouchableOpacity>            
            </View>
            <View></View>
        </View>
    );
}
