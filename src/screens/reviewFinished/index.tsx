import { FailedSession } from '@components/session/failed';
import { SuccessSession } from '@components/session/success';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export function ReviewFinishedScreen() {
    const { session, correctAnswer }:any = useSelector((state:RootState) => state.session);
    const percentual = session ? (correctAnswer / session.length * 100) : 0;
    const passed = percentual > 0.070;

    return (
        <Container>
            { passed ? (
                <SuccessSession />
            ) : (
                <FailedSession percentual={percentual} />
            )}
        </Container>
    );
}
