export function unlockAction() {
    return {
        type: '@animals/UNLOCK',
    };
}

export function unlockSuccessAction({ animal }:any) {
    return {
        type: '@animals/UNLOCK_SUCCESS',
        payload: {
            animal,
        },
    };
}

