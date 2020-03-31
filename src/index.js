import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import FetchCharacters from './FetchCharacters';
import Characters from './Characters';

// import { createEpicMiddleware } from 'redux-observable';

import './styles.scss';

const store = createStore(reducer);

const Application = () => {
  return (
    <div className="Application">
      <h1>Star Wars Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
