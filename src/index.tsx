import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Reducer, combineReducers } from 'redux';
import * as Immutable from 'immutable'
import { List, Map, Set, Record } from 'immutable';
import { Provider } from 'react-redux';

import { App } from './app';
import { store } from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
