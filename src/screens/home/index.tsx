import React, { useState } from 'react';

import { NewAdventure } from '@components/adventure/new';
import { DifficultyModal } from '@components/modals/difficulty';
import { Container } from './styles';

export function Home() {
    const [ modal, setModal ] = useState(false);

    function initAction() {
        setModal(true);
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
