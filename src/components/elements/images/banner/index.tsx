import { PictureProps } from '@interfaces/components/pictures/PictureProps';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { style } from './styles';

export function BannerImage({ source, action }:PictureProps) {
    return (
        <TouchableOpacity onPress={action}>
            <Image source={source} style={style.picture} />
        </TouchableOpacity>
    );
}
