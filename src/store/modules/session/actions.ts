export function createAction({ difficulty }:any) {
    return {
        type: '@session/CREATE',
        payload: {
            difficulty,
        },
    };
}

export function createActionSuccess({ session }:any) {
    return {
        type: '@session/CREATE_SUCCESS',
        payload: {
            session,
        },
    };
}

export function selectOptionAction({ option }:any) {
    return {
        type: '@session/SELECT_OPTION',
        payload: {
            option,
        },
    };
}

export function selectSuccessAction({ isCorrect }:any) {
    return {
        type: '@session/SELECT_SUCCESS',
        payload: {
            isCorrect,
        },
    };
}

export function nextAction() {
    return {
        type: '@session/NEXT',
    };
}

export function abortAction() {
    return {
        type: '@session/ABORT',
    };
}
