import { combineReducers } from 'redux';

import config from './config/reducer';
import difficulties from './difficulties/reducer';

export const rootReducer = combineReducers({
    config,
    difficulties,
});

export type RootState = ReturnType<typeof rootReducer>
