import { InfoText } from '@components/elements/texts/info';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

export function ItemCheckboxConfig({ title, value, action }:any) {
    const theme = useTheme();

    return (
        <Container>
            <InfoText value={title} />
            <CheckBox
                value={value}
                onChange={action}
                tintColors={{
                    true: theme?.TITLE_COLOR,
                    false: theme?.TITLE_COLOR,
                }}
            />
        </Container>
    );
}
