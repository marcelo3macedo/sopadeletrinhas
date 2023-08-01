import { Styles, TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from './styles';

export function TitleText({ value, styled = Styles.Default }:TextProps) {
    return (
        <Text styleName={styled}>{ value }</Text>
    );
}
