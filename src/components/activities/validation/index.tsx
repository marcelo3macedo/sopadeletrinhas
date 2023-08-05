import correct from '@assets/animations/correct.json';
import error from '@assets/animations/error.json';
import { TitleText } from '@components/elements/texts/title';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { getImageFromSlug } from '@helpers/AnimalsHelper';
import { Styles } from '@interfaces/texts/FontProps';
import { Container, Content, Header, Picture, style } from './styles';

export function ValidationActivies({ session, isCorrect }:any) {
  const { t } = useTranslation();
  const animation = isCorrect ? correct : error;
  const message = isCorrect ?
    t('activities.congratsCorrect') :
    t('activities.wrongAnswer');

  const { slug, correctAnswer, word } = session;
  const answer = correctAnswer ?? word;

  return (
    <Container>
      <Header>
        <LottieView
          source={animation}
          style={style.animations}
          autoPlay
          loop
        />
      </Header>
      <TitleText value={message} styled={Styles.HugeCentered} />
      <Content>
        <Picture source={getImageFromSlug(slug)} />
        { !isCorrect ?  <TitleText value={t('activities.rightAnswer')} styled={Styles.HugeCentered} /> : <></>}
        <TitleText value={answer} styled={Styles.HugeCentered} />
      </Content>
    </Container>
  );
}
