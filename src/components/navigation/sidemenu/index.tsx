import LogoIcon from '@assets/logos/logo.png';
import { LogoImage } from '@components/elements/images/logo';
import { OptionsMenu } from '@components/menu/options';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';

import { style } from './styles';


export default function SideMenuNavigation() {
  return (
    <View style={style.container}>
      <DrawerContentScrollView
        contentContainerStyle={style.drawerContent}>
        <View style={style.header}>
            <LogoImage source={LogoIcon} />
        </View>
        <View style={style.items}>
          <OptionsMenu />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
