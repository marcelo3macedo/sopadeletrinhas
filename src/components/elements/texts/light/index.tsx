import { FontProps, Styles } from '@interfaces/texts/FontProps';
import React from 'react';
import { Text } from './styles';

export function LightText({ value, styled = Styles.Default }:FontProps) {
    return (
        <Text styleName={styled}>{ value }</Text>
    );
}
