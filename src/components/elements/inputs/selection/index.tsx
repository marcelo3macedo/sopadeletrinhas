import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { style } from './styles';

export function SelectBoxInput({ options, value, handleChange }:any) {
    if (!options || options.length === 0) {return <></>;}

    function valueChangeHandler(v:any) {
        handleChange(v);
    }

    return (
        <Picker
            mode="dropdown"
            enabled={true}
            selectedValue={value}
            onValueChange={valueChangeHandler}>
            {options.map((option:any) => (
                <Picker.Item key={option.id} label={option.name} value={option.id} style={style.content} />
            ))}
        </Picker>
    );
}
