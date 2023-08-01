import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { IconProps, Styles } from '@interfaces/images/IconProps';

import { getStyle } from './styles';

export function Icon({ source, fill = '#000', styled = Styles.Small }:IconProps) {
    const { width, height } = getStyle(styled);

    return (
        <View>
            <SvgXml xml={source} width={width} height={height} fill={fill} />
        </View>
    );
}
