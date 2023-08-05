import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/FontProps';
import { selectOptionAction } from '@store/modules/session/actions';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Options from '../options';
import { BackArea, Container, Header, WordArea } from './styles';

const PaintItem = ({ session }:any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [ selected, setSelected ] = useState(false);
  const { options, word } = session;

  function optionSelected(value:string) {
    if (selected) {return;}

    setSelected(true);

    setTimeout(() => {
      dispatch(selectOptionAction({ option: value }));
    }, 3000);
  }

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
      <Options options={options} action={optionSelected} />
    </Container>
);
};

export default PaintItem;
