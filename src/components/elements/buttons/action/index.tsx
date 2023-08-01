import { TitleText } from '@components/elements/texts/title';
import { GRADIENT_MIDDLE_VERTICAL_END, GRADIENT_MIDDLE_VERTICAL_START } from '@constants/gradients';
import { ButtonActionProps } from '@interfaces/components/buttons/ButtonActionProps';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { style } from './styles';

export function ButtonAction({ title, action, pallete }:ButtonActionProps) {
    return (
        <TouchableOpacity onPress={action} style={style.wrapper}>
            <LinearGradient
                style={style.container}
                colors={[pallete?.primaryColor, pallete?.secondaryColor]}
                start={GRADIENT_MIDDLE_VERTICAL_START}
                end={GRADIENT_MIDDLE_VERTICAL_END}
            >
                <View style={style.textArea}>
                    <TitleText value={title} styled={Styles.LightH3Centered} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}
