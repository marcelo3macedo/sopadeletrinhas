import { LinkedTextProps, Styles } from '@interfaces/texts/LinkedTextProps';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from './styles';

export function LinkedText({ value, action, styled = Styles.Default }:LinkedTextProps) {
    if (!value) {
        return <></>;
    }

    return (
        <TouchableOpacity onPress={action}>
            <Text styleName={styled}>{ value }</Text>
        </TouchableOpacity>
    );
}
