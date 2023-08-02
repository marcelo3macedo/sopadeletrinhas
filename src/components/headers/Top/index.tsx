import { DescriptionText } from '@components/elements/texts/description';
import { HeaderText } from '@components/elements/texts/header';
import { TopHeaderProps } from '@interfaces/elements/headers/TopHeaderProps';
import React from 'react';
import { Container, Header } from './styles';

export function TopHeader({ title, description }:TopHeaderProps) {
    return (
        <Container>
            <Header>
                <HeaderText value={title} />
            </Header>
            <DescriptionText value={description} />
        </Container>
    );
}
