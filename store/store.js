import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import balanceReducer from '../reducer/balanceReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    balanceReducer: balanceReducer
})

const configureStore = () => createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
