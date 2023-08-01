import { TitleText } from '@components/elements/texts/title';
import { GRADIENT_MIDDLE_VERTICAL_END, GRADIENT_MIDDLE_VERTICAL_START } from '@constants/gradients';
import { ButtonPrimaryProps } from '@interfaces/components/buttons/ButtonPrimaryProps';
import { Styles } from '@interfaces/texts/TextProps';
import { theme } from '@styles/index.style';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { style } from './styles';

export function ButtonPrimary({ title, action }:ButtonPrimaryProps) {
    return (
        <TouchableOpacity onPress={action}>
            <LinearGradient
                style={style.container}
                colors={[theme.PALLETE01_COLOR_DARK, theme.PALLETE01_COLOR]}
                start={GRADIENT_MIDDLE_VERTICAL_START}
                end={GRADIENT_MIDDLE_VERTICAL_END}
            >
                <View style={style.textArea}>
                    <TitleText value={title} styled={Styles.LightH2Centered} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}
