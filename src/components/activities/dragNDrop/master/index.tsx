import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { getImageFromSlug } from '@helpers/AnimalsHelper';
import { Styles } from '@interfaces/texts/FontProps';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Options from '../options';
import WordArea from '../word';
import { BackArea, Container, Header, Picture } from './styles';

const DragNDrop = ({ session }:any) => {
  const { t } = useTranslation();
  const [ selected, setSelected ] = useState([]) as any;
  const { slug, syllables, options } = session;

  function selectedSyllable(value: string) {
    const syllable = syllables[selected.length];

    if (value !== syllable) {return;}

    const newSelected = selected.concat(value);
    setSelected(newSelected);
  }

  return (
    <Container>
      <BackArea>
        <ButtonSecondary title={t('actions.exit')} />
      </BackArea>
      <Header>
        <TitleText value={t('dragNDrop.title')} styled={Styles.LargeCentered} />
      </Header>
      <Picture source={getImageFromSlug(slug)} />
      <WordArea syllables={selected} />
      <Options options={options} action={selectedSyllable}  />
    </Container>
);
};

export default DragNDrop;