import HomeIcon from '@assets/icons/home.svg';
import LockIcon from '@assets/icons/lock.svg';
import SearchIcon from '@assets/icons/search.svg';
import UserIcon from '@assets/icons/user.svg';
import { ItemAccount } from '@components/account/item';
import { InfoText } from '@components/elements/texts/info';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { PATH_ABOUTUS, PATH_ANIMALS, PATH_HOME, PATH_PRIVACYPOLICY } from '@services/navigation';
import { navigate } from '@services/navigation/root';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { style } from './styles';

export function OptionsMenu() {
    const { t } = useTranslation();

    function navigateTo(route:string, screen:string) {
        navigate(route, { screen });
    }

    return (
        <View style={style.container}>
            <View style={style.block}>
                <InfoText value={t('menu.area')} />
                <ItemAccount source={HomeIcon} value={t('menu.options.home')} action={() => { navigateTo(RouteOptions.main, PATH_HOME); }} />
                <ItemAccount source={SearchIcon} value={t('menu.options.animals')} action={() => { navigateTo(RouteOptions.main, PATH_ANIMALS); }} />
                <ItemAccount source={UserIcon} value={t('menu.options.aboutUs')} action={() => { navigateTo(RouteOptions.main, PATH_ABOUTUS); }} />
                <ItemAccount source={LockIcon} value={t('menu.options.privacyPolicy')} action={() => { navigateTo(RouteOptions.main, PATH_PRIVACYPOLICY); }} />
            </View>
        </View>
    );
}
