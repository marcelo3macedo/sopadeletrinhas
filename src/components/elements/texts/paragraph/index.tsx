import { TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from './styles';

export function ParagraphText({ value }:TextProps) {
    return (
        <Text>{ value }</Text>
    );
}
