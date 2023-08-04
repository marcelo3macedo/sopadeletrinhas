import correct from '@assets/animations/correct.json';
import error from '@assets/animations/error.json';
import { TitleText } from '@components/elements/texts/title';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Styles } from '@interfaces/texts/FontProps';
import { Container, style } from './styles';

export function ValidationActivies({ isCorrect }:any) {
  const { t } = useTranslation();
  const animation = isCorrect ? correct : error;
  const message = isCorrect ?
    t('activities.congratsCorrect') :
    t('activities.wrongAnswer');

  return (
    <Container>
      <LottieView
        source={animation}
        style={style.animations}
        autoPlay
        loop
      />
      <TitleText value={message} styled={Styles.HugeCentered} />
    </Container>
  );
}
