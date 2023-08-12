import { FailedSession } from '@components/session/failed';
import { SuccessSession } from '@components/session/success';
import { finishedSessionSound } from '@helpers/SoundHelper';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export function ReviewFinishedScreen() {
    const { session, correctAnswer }:any = useSelector((state:RootState) => state.session);
    const percentual = session ? (correctAnswer / session.length * 100) : 0;
    const passed = percentual > 70;

    useEffect(() => {
        if (session) {
            finishedSessionSound(passed);
        }
    }, [passed, session]);

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
