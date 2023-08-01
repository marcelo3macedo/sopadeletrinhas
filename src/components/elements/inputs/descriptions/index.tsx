import React from 'react';
import { TextInput } from 'react-native';

import { Styles, ValueProps } from '@interfaces/elements/inputs/ValueProps';

import { getStyle } from './styles';

export function DescriptionsInput({ value, placeholder, onChangeText, styled = Styles.Default }:ValueProps) {
    const inputStyle = getStyle(styled);

    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            style={inputStyle}
            onChangeText={onChangeText}
            multiline={true}
            numberOfLines={2}
        />
    );
}
