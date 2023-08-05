import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { getImageFromSlug } from '@helpers/AnimalsHelper';
import { Styles } from '@interfaces/texts/FontProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Options from '../options';
import WordArea from '../word';
import { BackArea, Container, Header, Picture } from './styles';

const DragNDrop = () => {
  const { t } = useTranslation();
  const word = 'pato';
  const syllables = [] as any;
  const options = [ 'PA', 'BA', 'SA', 'TO', 'CA', 'DE'];

  return (
    <Container>
      <BackArea>
        <ButtonSecondary title={t('actions.exit')} />
      </BackArea>
      <Header>
        <TitleText value={t('dragNDrop.title')} styled={Styles.LargeCentered} />
      </Header>
      <Picture source={getImageFromSlug(word)} />
      <WordArea syllables={syllables} />
      <Options options={options}  />
    </Container>
);
};

export default DragNDrop;
