/* eslint-env browser*/
import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './components/App.jsx';
import reducer from './reducers/index.js';
import addURL from './actions/index.js';

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger),
);

// $.get('/api/state', (data, status) => {
//   console.log('get Async', status);
//   store.dispatch(addURL('testButtonFrom Async', ['http://google.com']));
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
