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
      <div class="starwars-demo">
        <img
          src="//cssanimation.rocks/demo/starwars/images/star.svg"
          alt="Star"
          class="star"
        />
        <img
          src="//cssanimation.rocks/demo/starwars/images/wars.svg"
          alt="Wars"
          class="wars"
        />
        <h2 class="byline" id="byline">
          Autocomplete
        </h2>
      </div>
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
