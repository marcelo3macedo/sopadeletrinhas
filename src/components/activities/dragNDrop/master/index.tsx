import { TitleText } from '@components/elements/texts/title';
import { getImageFromSlug } from '@helpers/AnimalsHelper';
import { Styles } from '@interfaces/texts/FontProps';
import { selectOptionAction } from '@store/modules/session/actions';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Options from '../options';
import WordArea from '../word';
import { Container, Header, Picture } from './styles';

const DragNDrop = ({ session }:any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [ selected, setSelected ] = useState([]) as any;
  const { slug, syllables, options } = session?.details;

  if (!session) {return;}

  function selectedSyllable(value: string) {
    const syllable = syllables[selected.length];

    if (value !== syllable) {return;}

    const newSelected = selected.concat(value);
    setSelected(newSelected);

    if (newSelected.length < syllables.length) {return;}

    setTimeout(() => {
      dispatch(selectOptionAction({ option: session.details.slug }));
    }, 1500);
  }

  return (
    <Container>
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
