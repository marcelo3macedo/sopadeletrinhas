import { Icon } from '@components/elements/images/Icon';
import { TitleText } from '@components/elements/texts/title';
import { GRADIENT_MIDDLE_VERTICAL_END, GRADIENT_MIDDLE_VERTICAL_START } from '@constants/gradients';
import { ButtonIconedProps } from '@interfaces/components/buttons/ButtonIconedProps';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { style } from './styles';

export function ButtonActionIconed({ title, action, pallete, icon }:ButtonIconedProps) {
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
                    <Icon source={icon} fill="#fff" />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}
