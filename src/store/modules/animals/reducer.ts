import produce from 'immer';

const INITIAL_STATE = {
    lastUnlocked: null,
    animals: {
        cat: false,
        cow: false,
        dog: false,
        elephant: false,
        panda: false,
        pig: false,
        pigeon: false,
        rabbit: false,
        sloth: false,
        tiger: false,
        toucan: false,
        whale: false,
    },
    released: 0,
};

export default function sessions(state = INITIAL_STATE, action:any) {
    return produce(state, draft => {
        switch (action.type) {
            case '@animals/UNLOCK_SUCCESS': {
                let animals = Object.assign({}, draft.animals);
                animals[action.payload.animal] = true;
                draft.animals = animals;
                draft.lastUnlocked = action.payload.animal;
                draft.released = (draft.released || 0) + 1;
                break;
            }
            default:
                return state;
        }
    });
}
