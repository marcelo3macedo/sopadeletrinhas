import { TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from './styles';

export function HeaderText({ value }:TextProps) {
    return (
        <Text>{ value }</Text>
    );
}
