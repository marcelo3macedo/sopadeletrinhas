import React from 'react';

import { PictureProps } from '@interfaces/components/pictures/PictureProps';

import { Picture } from './styles';

export function HeaderLogoImage({ source }:PictureProps) {
    return (
        <Picture source={source} />
    );
}
