import React from 'react';
import { TextInput } from 'react-native';

import { Styles, ValueProps } from '@interfaces/elements/inputs/ValueProps';

import { getStyle } from './styles';

export function ValueInput({ value, placeholder, onChangeText, onEndEditing, styled = Styles.Default }:ValueProps) {
    const inputStyle = getStyle(styled);

    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            style={inputStyle}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
        />
    );
}
