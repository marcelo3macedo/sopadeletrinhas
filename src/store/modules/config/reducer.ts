import { ConfigUpdateTarget } from '@interfaces/config/IConfigUpdateTarget';
import produce from 'immer';

const INITIAL_STATE = {
    alertNewSessions: true,
    soundEffects: true,
    nightMode: false,
    fontSize: 'normal',
    language: 'pt',
    fontAvailable: ['normal', 'big'],
    languageAvailable: ['pt', 'en'],
};

export default function config(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@config/UPDATE': {
                const target: ConfigUpdateTarget = action.payload.target;
                draft[target] = action.payload.value as never;
                break;
            }
            default:
                break;
        }
    });
}
