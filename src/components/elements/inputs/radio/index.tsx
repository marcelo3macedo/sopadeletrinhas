import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { RBINPUT_CHECKED, RBINPUT_UNCHECKED } from '@constants/radioBoxInput';
import { RadioProps } from '@interfaces/elements/inputs/RadioProps';

import { style } from './styles';

export function RadioBoxInput({ items, value, setValue }:RadioProps) {
    return (
        <View style={style.content}>
            {items.map((item:any) => (
                <RadioButton.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                    status={value === item.value ? RBINPUT_CHECKED : RBINPUT_UNCHECKED}
                    onPress={() => setValue(item.value)}
                    labelStyle={style.option}
                />
            ))}
        </View>
    );
}
