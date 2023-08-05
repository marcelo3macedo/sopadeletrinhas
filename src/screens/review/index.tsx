import CorrectOption from '@components/activities/correctOption/master';
import DragNDrop from '@components/activities/dragNDrop/master';
import PaintItem from '@components/activities/paintItem/master';
import { ValidationActivies } from '@components/activities/validation';
import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_DRAGNDROP, SESSIONTYPE_PAINT } from '@constants/sessionTypes';
import { RootState } from '@store/modules/rootReducer';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export function Review() {
    const { session, activeIndex, validated, isCorrect }:any = useSelector((state:RootState) => state.session);
    const activeSession = session[activeIndex];

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

    return (
        <Container>
            { validated ? generateValidation() : generateActivity() }
        </Container>
    );
}
