import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './create-store';

const HotApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById('root')
);
