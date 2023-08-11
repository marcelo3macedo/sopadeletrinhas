import { DefaultDescription } from '@components/descriptions/default';
import { TitleText } from '@components/elements/texts/title';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Header, Info } from './styles';

export function AboutUs() {
  const { t } = useTranslation();

  return (
    <Container>
        <Header>
            <TitleText value={t('about.title')} />
        </Header>
        <Info>
            <DefaultDescription content={t('about.content')} />
        </Info>
    </Container>
  );
}
