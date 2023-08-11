import SadFace from '@assets/animations/sad-face.json';
import { ButtonPrimary } from '@components/elements/buttons/primary';
import { TitleText } from '@components/elements/texts/title';
import { abortAction } from '@store/modules/session/actions';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { style } from './styles';

export function FailedSession({ percentual }:any) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const message = t('session.failed.message').replace('X', Math.round(percentual).toString());

    function tryAgainAction() {
        dispatch(abortAction());
    }

    return (
        <View style={style.container}>
            <LottieView
                source={SadFace}
                style={style.animations}
                autoPlay
                loop
            />
            <View style={style.message}>
                <TitleText value={message} />
            </View>
            <ButtonPrimary title={t('session.failed.tryAgain')} action={tryAgainAction} />
        </View>
    );
}
