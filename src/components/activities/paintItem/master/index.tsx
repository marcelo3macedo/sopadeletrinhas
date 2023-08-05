import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/FontProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Options from '../options';
import { BackArea, Container, Header, WordArea } from './styles';

const PaintItem = ({ session }:any) => {
  const { t } = useTranslation();
  const { options, word } = session;

  return (
    <Container>
      <BackArea>
        <ButtonSecondary title={t('actions.exit')} />
      </BackArea>
      <Header>
        <TitleText value={t('paintItem.choose')} styled={Styles.LargeCentered} />
      </Header>
      <WordArea>
        <TitleText value={word} styled={Styles.VentiCentered} />
      </WordArea>
      <Options options={options} />
    </Container>
);
};

export default PaintItem;
