import { GRADIENT_MIDDLE_VERTICAL_END, GRADIENT_MIDDLE_VERTICAL_START } from '@constants/gradients';
import { ButtonActionProps } from '@interfaces/components/buttons/ButtonActionProps';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { LightText } from '@components/elements/texts/light';
import { Styles } from '@interfaces/texts/FontProps';
import { style } from './styles';

export function ButtonAction({ title, action, pallete }:ButtonActionProps) {
    return (
        <TouchableOpacity onPress={action} style={style.wrapper}>
            <LinearGradient
                style={style.container}
                colors={[pallete.primaryColor, pallete.secondaryColor]}
                start={GRADIENT_MIDDLE_VERTICAL_START}
                end={GRADIENT_MIDDLE_VERTICAL_END}
            >
                <View style={style.textArea}>
                    <LightText value={title} styled={Styles.LargeCentered} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}
