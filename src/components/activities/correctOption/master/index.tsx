import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/FontProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Options from '../options';
import { BackArea, Container, Header, WordArea } from './styles';

const CorrectOption = () => {
  const { t } = useTranslation();
  const syllable = 'BA';
  const options = [
      { value: 'Pato', image: 'pato' },
      { value: 'Abelha', image: 'abelha' },
      { value: 'Baleia', image: 'baleia' },
      { value: 'Cachorro', image: 'cachorro' },
  ];

  return (
    <Container>
      <BackArea>
        <ButtonSecondary title={t('actions.exit')} />
      </BackArea>
      <Header>
        <TitleText value={t('correctOption.choose')} styled={Styles.LargeCentered} />
      </Header>
      <WordArea>
        <TitleText value={syllable} styled={Styles.VentiCentered} />
      </WordArea>
      <Options options={options} />
    </Container>
);
};

export default CorrectOption;
