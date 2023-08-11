import { combineReducers } from 'redux';

import animals from './animals/reducer';
import config from './config/reducer';
import difficulties from './difficulties/reducer';
import session from './session/reducer';

export const rootReducer = combineReducers({
    animals,
    config,
    difficulties,
    session,
});

export type RootState = ReturnType<typeof rootReducer>
