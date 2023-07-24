import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import React from 'react';
import { StatusBar, View } from 'react-native';

import { style } from './styles';

export function MainTheme({ children }: PageWrapperProps) {
  return (
    <View style={style.container}>
        <StatusBar
            barStyle="light-content"
            translucent
        />
        <View style={style.content}>
          {children}
        </View>
    </View>
  );
}
