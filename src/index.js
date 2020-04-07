import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

// redux-saga 부분 구현 설정
import createSagaMiddleware from 'redux-saga';
import requestSaga from './store/saga/index.js';
const sagaMiddleware = createSagaMiddleware();

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/index.js';

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // sagaMiddleware 주입
sagaMiddleware.run(requestSaga);

ReactDOM.render(
    <Provider store={store}>
        <App name='zero86' age='20' />
    </Provider>,
    document.getElementById('app'));