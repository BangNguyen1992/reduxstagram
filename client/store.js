import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import React from 'react';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


const defaultState = {
  posts, comments
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f );

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// Update hot reload
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index');
    store.replaceReducer(nextRootReducer)
  })
}

export default store;