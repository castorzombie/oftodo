import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const initialState = {};

const middleware = applyMiddleware(thunk, logger);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    initialState,
    compose(
        middleware,
        reduxDevTools
    )
);

export default store;