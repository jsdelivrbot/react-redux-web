import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import gastosAppReducers from './reducers';
import GastosContainer from './containers/gastosContainer';

const loggerMiddleware = createLogger();
const store = createStore(
    gastosAppReducers, 
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

render( 
    <Provider store = { store } >
        <GastosContainer / >
    </Provider>,
    document.querySelector('.container'),
);