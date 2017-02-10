import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gastosApp from './reducers';
import GastosContainer from './containers/gastosContainer';

const store = createStore(gastosApp);

render(
  <Provider store={store}>
    <GastosContainer />
  </Provider>,
  document.querySelector('.container'),
);
