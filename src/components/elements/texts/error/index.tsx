import { TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from './styles';

export function ErrorText({ value, theme = 'dark' }:TextProps) {
    if (!value) {
        return <></>;
    }

    return (
        <Text styleName={theme}>{ value }</Text>
    );
}
