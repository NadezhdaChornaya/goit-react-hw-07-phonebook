// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redusers/rootRedusers';

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore(
    {
        reducer: rootReducer,
    }
)
export default store;