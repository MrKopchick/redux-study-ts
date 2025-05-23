import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer } from './reducers';
import { UserAction } from '../types/user';

export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk as ThunkMiddleware<ReturnType<typeof rootReducer>, UserAction>)
);

export type RootState = ReturnType<typeof rootReducer>;