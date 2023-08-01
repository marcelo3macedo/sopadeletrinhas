import BackIcon from '@assets/icons/back.svg';
import { Icon } from '@components/elements/images/Icon';
import { TitleText } from '@components/elements/texts/title';
import { GRADIENT_MIDDLE_VERTICAL_END, GRADIENT_MIDDLE_VERTICAL_START } from '@constants/gradients';
import { ButtonPrimaryProps } from '@interfaces/components/buttons/ButtonPrimaryProps';
import { Styles as IconStyles } from '@interfaces/images/IconProps';
import { Styles } from '@interfaces/texts/TextProps';
import { theme } from '@styles/index.style';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { style } from './styles';

export function ButtonSecondary({ title, action }:ButtonPrimaryProps) {
    return (
        <TouchableOpacity onPress={action}>
            <LinearGradient
                style={style.container}
                colors={[theme.GRAY_COLOR, theme.DARK_COLOR]}
                start={GRADIENT_MIDDLE_VERTICAL_START}
                end={GRADIENT_MIDDLE_VERTICAL_END}
            >
                <Icon source={BackIcon} styled={IconStyles.Medium} fill={theme.LIGHT_COLOR}  />
                <View style={style.textArea}>
                    <TitleText value={title} styled={Styles.LightH4Centered} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}
