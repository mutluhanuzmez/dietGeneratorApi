import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import authReducer from './reducers/auth';

import { watcher } from "./sagas";



const rootReducer = combineReducers({
    auth: authReducer,
    // add more reducers to use here
});

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

const configureStore = () => {
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(watcher);
    return store;
};

export default configureStore;