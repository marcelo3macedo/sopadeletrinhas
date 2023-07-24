import { combineReducers } from 'redux';

import config from './config/reducer';

export const rootReducer = combineReducers({
    config
});

export type RootState = ReturnType<typeof rootReducer>
