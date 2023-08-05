import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_DRAGNDROP, SESSIONTYPE_PAINT } from '@constants/sessionTypes';
import produce from 'immer';

const INITIAL_STATE = {
    session: [
        {
            type: SESSIONTYPE_DRAGNDROP,
            word: 'Pato',
            slug: 'pato',
            syllables: [ 'PA', 'TO'],
            options: [ 'CA', 'PA', 'SA', 'TO'],
        },
        {
            type: SESSIONTYPE_PAINT,
            word: 'ABELHA',
            correctAnswer: 'Abelha',
            slug: 'abelha',
            options: [
                { animal: 'pato' },
                { animal: 'abelha' },
                { animal: 'baleia' },
                { animal: 'cachorro' },
            ],
        },
        {
            type: SESSIONTYPE_CORRECTANSWER,
            syllable: 'BA',
            correctAnswer: 'Baleia',
            slug: 'baleia',
            options: [
                { value: 'pato', image: 'pato' },
                { value: 'abelha', image: 'abelha' },
                { value: 'baleia', image: 'baleia' },
                { value: 'cachorro', image: 'cachorro' },
            ],
        },
    ],
    activeIndex: 0,
    difficulty: '',
    validated: false,
    isCorrect: false,
    types: [],
    correctAnswer: 0,
};

export default function session(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@session/CREATE': {
                draft.difficulty = action.payload.difficulty;
                draft.activeIndex = 0;
                draft.correctAnswer = 0;
                break;
            }
            case '@session/CREATE_SUCCESS': {
                draft.session = action.payload.session;
                break;
            }
            case '@session/SELECT_SUCCESS': {
                draft.validated = true;
                draft.isCorrect = action.payload.isCorrect;
                draft.correctAnswer = action.payload.isCorrect ? draft.correctAnswer + 1 : draft.correctAnswer;
                break;
            }
            case '@session/NEXT': {
                draft.validated = false;
                draft.isCorrect = false;
                draft.activeIndex = draft.activeIndex + 1;
                break;
            }
            case '@session/ABORT': {
                draft.validated = false;
                draft.isCorrect = false;
                draft.session = null as any;
                draft.correctAnswer = 0;
                break;
            }
            default:
                return state;
        }
    });
}
