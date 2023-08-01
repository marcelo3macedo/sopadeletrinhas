import { TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from './styles';

export function DescriptionText({ value, styled }:TextProps) {
    return (
        <Text styledName={styled}>{ value }</Text>
    );
}
