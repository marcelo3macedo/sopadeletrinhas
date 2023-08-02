import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { InfoText } from '@components/elements/texts/info';
import React from 'react';
import { Container } from './styles';

export function ItemButton({ title, value, action }:any) {
    return (
        <Container>
            <InfoText value={title} />
            <ButtonSecondary title={value} action={action} />
        </Container>
    );
}
