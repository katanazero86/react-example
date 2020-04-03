import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/index.js';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App name='zero86' age='20' />
    </Provider>,
    document.getElementById('app'));