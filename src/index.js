import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import * as reducers from './reducers';
import AppContainer from './routes/App';

const reducer = combineReducers(reducers);

const store = createStore(reducer, devToolsEnhancer());

export default function Tomodoro() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
