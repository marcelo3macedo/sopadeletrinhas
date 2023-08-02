import { ButtonPrimary } from '@components/elements/buttons/primary';
import { TitleText } from '@components/elements/texts/title';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Styles } from '@interfaces/texts/FontProps';
import { Actions, Container, Descrition, Header } from './styles';

export function NewAdventure({ initAction }:any) {
    const { t } = useTranslation();

    return (
        <Container>
            <Header>
                <TitleText value={t('adventure.newTitle')} styled={Styles.HugeCentered} />
            </Header>
            <Descrition>
                <TitleText value={t('adventure.newSubtitle')} styled={Styles.LargeCentered}  />
            </Descrition>

            <Actions>
                <ButtonPrimary title={t('actions.start')} action={initAction} />
            </Actions>
        </Container>
    );
}
