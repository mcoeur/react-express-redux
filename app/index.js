import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import App from './app'
import Reducers from './Reducers';

const store = createStore(
    Reducers,
    applyMiddleware(createLogger({level: 'info',duration: true}))
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);