import { PictureProps } from '@interfaces/components/pictures/PictureProps';
import React from 'react';
import { Image } from 'react-native';


import { style } from './styles';

export function SmallLogoImage({ source }:PictureProps) {
    return (
        <Image source={source} style={style.picture} />
    );
}
