import { TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from './styles';

export function InfoText({ value, theme = 'dark' }:TextProps) {
    if (!value) {
        return <></>;
    }

    return (
        <Text styleName={theme}>{ value }</Text>
    );
}
