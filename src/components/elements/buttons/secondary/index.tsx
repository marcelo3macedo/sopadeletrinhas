import { InfoText } from '@components/elements/texts/info';
import { ButtonPrimaryProps } from '@interfaces/components/buttons/ButtonPrimaryProps';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from './styles';

export function ButtonSecondary({ title, action, larger = false }:ButtonPrimaryProps) {
    return (
        <TouchableOpacity onPress={action}>
            <Container styleName={larger}>
                <InfoText value={title} />
            </Container>
        </TouchableOpacity>
    );
}
