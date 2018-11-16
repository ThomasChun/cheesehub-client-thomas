import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CheeseList from './components/cheese-list';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cheesesReducer from './reducers/cheese';
import {Provider} from 'react-redux';

const store = createStore(cheesesReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
