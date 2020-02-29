import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Kids } from './kids';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            kids: Kids,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}