import { GRADIENT_MIDDLE_VERTICAL_END, GRADIENT_MIDDLE_VERTICAL_START } from '@constants/gradients';
import { ButtonPrimaryProps } from '@interfaces/components/buttons/ButtonPrimaryProps';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { LightText } from '@components/elements/texts/light';
import { useTheme } from 'styled-components';
import { TextArea, style } from './styles';

export function ButtonPrimary({ title, action }:ButtonPrimaryProps) {
    const theme = useTheme();

    return (
        <TouchableOpacity onPress={action}>
            <LinearGradient
                colors={[theme.GREEN_COLOR, theme.GREEN_COLOR_DARK]}
                style={style.container}
                start={GRADIENT_MIDDLE_VERTICAL_START}
                end={GRADIENT_MIDDLE_VERTICAL_END}>
                <TextArea>
                    <LightText value={title} />
                </TextArea>
            </LinearGradient>
        </TouchableOpacity>
    );
}
