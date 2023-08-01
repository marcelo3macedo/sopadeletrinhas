import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { InfoText } from '@components/elements/texts/info';
import { ButtonPrimaryProps } from '@interfaces/components/buttons/ButtonPrimaryProps';

import { style } from './styles';

export function ButtonMenu({ title, action }:ButtonPrimaryProps) {
    return (
        <TouchableOpacity onPress={action}>
            <View style={[ style.container, style.shadow ]}>
                <InfoText value={title} theme={'dark'}  />
            </View>
        </TouchableOpacity>
    );
}
