import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtool-extentsion'
import { rootReducer } from '../reducers/index.js'
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
const mainApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

ReactDOM.render(mainApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
