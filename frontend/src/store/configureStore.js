import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/auth';
import registerReducer from './reducers/register';


import { watcher } from "./sagas";



const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    // add more reducers to use here
});

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = composeWithDevTools;

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(watcher);
    return store;
};

export default configureStore;