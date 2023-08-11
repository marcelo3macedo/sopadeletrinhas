import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/FontProps';
import { selectOptionAction } from '@store/modules/session/actions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Options from '../options';
import { Container, Header, WordArea } from './styles';

const CorrectOption = ({ session }:any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  if (!session || !session.details) {return;}

  const { syllable, options } = session.details;

  function optionSelected(option:any) {
    dispatch(selectOptionAction({ option }));
  }

  return (
    <Container>
      <Header>
        <TitleText value={t('correctOption.choose')} styled={Styles.LargeCentered} />
      </Header>
      <WordArea>
        <TitleText value={syllable} styled={Styles.VentiCentered} />
      </WordArea>
      <Options options={options} action={optionSelected} />
    </Container>
);
};

export default CorrectOption;
