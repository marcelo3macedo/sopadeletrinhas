export function updateAction({ target, value }:any) {
    return {
        type: '@config/UPDATE',
        payload: {
            target, value,
        },
    };
}
