import { Icon } from '@components/elements/images/Icon';
import { InfoText } from '@components/elements/texts/info';
import React from 'react';

import { Container, Info } from './styles';

export function ItemAccount({ source, value, action }:any) {
    return (
        <Container onPress={action}>
            <Icon source={source} />
            <Info>
                <InfoText value={value} />
            </Info>
        </Container>
    );
}
