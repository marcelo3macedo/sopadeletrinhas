import React from 'react';
import { Image } from 'react-native';

import { PictureProps } from '@interfaces/components/pictures/PictureProps';

import { style } from './styles';

export function InfoImage({ source }:PictureProps) {
    return (
        <Image source={source} style={style.picture} />
    );
}
