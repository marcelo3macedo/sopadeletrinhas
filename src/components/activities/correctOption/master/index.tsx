import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/FontProps';
import { selectOptionAction } from '@store/modules/session/actions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Options from '../options';
import { BackArea, Container, Header, WordArea } from './styles';

const CorrectOption = ({ session }:any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { syllable, options } = session;

  function optionSelected(option:any) {
    dispatch(selectOptionAction({ option }));
  }

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
      <Options options={options} action={optionSelected} />
    </Container>
);
};

export default CorrectOption;
