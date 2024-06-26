import CorrectOption from '@components/activities/correctOption/master';
import DragNDrop from '@components/activities/dragNDrop/master';
import PaintItem from '@components/activities/paintItem/master';
import { ValidationActivies } from '@components/activities/validation';
import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_DRAGNDROP, SESSIONTYPE_PAINT } from '@constants/sessionTypes';
import { backgroundSound } from '@helpers/SoundHelper';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { Styles } from '@interfaces/texts/FontProps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { PATH_HOME } from '@services/navigation';
import { navigate } from '@services/navigation/root';
import { RootState } from '@store/modules/rootReducer';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BackArea, Breadcrumb, Container } from './styles';

export function Review() {
    const [ sound, setSound ] = useState(null) as any;
    const { session, activeIndex, validated, isCorrect }:any = useSelector((state:RootState) => state.session);
    const activeSession = session[activeIndex];
    const { t } = useTranslation();
    const navigation = useNavigation();
    const questionNumber = activeIndex ? activeIndex + 1 : 1;
    const questionTotal = session.length;
    const questionPosition = `${t('activities.questionNumber')} ${questionNumber} ${t('activities.questionOf')} ${questionTotal}`;

    useFocusEffect(() => {
        if (!sound) {
            setSound(backgroundSound());
        } else {
            sound.play();
        }

        const unsubscribe = navigation.addListener('blur', () => {
            if (sound) {
                sound.stop();
            }
        });

        return unsubscribe;
    });

    if (!activeSession) {return <></>;}

    function generateActivity() {
        switch (activeSession.type) {
            case SESSIONTYPE_CORRECTANSWER:
                return <CorrectOption session={activeSession} />;
            case SESSIONTYPE_DRAGNDROP:
                return <DragNDrop session={activeSession} />;
            case SESSIONTYPE_PAINT:
                return <PaintItem session={activeSession} />;
        }

        return <></>;
    }

    function generateValidation() {
        return <ValidationActivies session={activeSession} isCorrect={isCorrect} />;
    }

    function exitAction() {
        navigate(RouteOptions.main, { screen: PATH_HOME });
    }

    return (
        <Container>
            <BackArea>
                <ButtonSecondary title={t('actions.exit')} action={exitAction} />
            </BackArea>
            <Breadcrumb>
                <TitleText value={questionPosition} styled={Styles.Medium} />
            </Breadcrumb>

            { validated ? generateValidation() : generateActivity() }
        </Container>
    );
}
