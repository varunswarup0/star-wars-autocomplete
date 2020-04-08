import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import FetchCharacters from './FetchCharacters';
import Characters from './Characters';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './fetch-character-epic';

import './styles.scss';

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <div class="stars"></div>
      <div className="titleContainer">
        <div class="logo"></div>
        <div className="autoComplete">
          {' '}
          A long time ago, in a galaxy far,
          <br /> far away....
        </div>
      </div>
      {/* <h1>Star Wars Autocomplete</h1> */}
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
