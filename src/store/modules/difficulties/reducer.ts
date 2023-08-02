import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from '@constants/difficulties';
import produce from 'immer';

const INITIAL_STATE = {
    options: [
        DIFFICULTY_EASY,
        DIFFICULTY_MEDIUM,
        DIFFICULTY_HARD,
    ],
};

export default function difficulties(state = INITIAL_STATE, action:any) {
    return produce(state, _draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}
