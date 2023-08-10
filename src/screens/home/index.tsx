import React, { useState } from 'react';

import { NewAdventure } from '@components/adventure/new';
import { DifficultyModal } from '@components/modals/difficulty';
import { createAction } from '@store/modules/session/actions';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

export function Home() {
    const [ modal, setModal ] = useState(false);
    const dispatch = useDispatch();

    function initAction() {
        //setModal(true);
        dispatch(createAction({ difficulty: 'easy'}));
    }

    function dismissAction() {
        setModal(false);
    }

    return (
        <Container>
            <NewAdventure initAction={initAction} />
            <DifficultyModal modal={modal} dismissAction={dismissAction} />
        </Container>
    );
}
