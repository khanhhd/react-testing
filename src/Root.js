import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

export default ({children, intialState = {}}) => {
  const store=createStore(reducers, intialState, applyMiddleware(promiseMiddleware))
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
