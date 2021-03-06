/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import createStore from '../utils/createStore';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  axiosInstance,
  window.INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
);

const client = (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>
);

const root = document.getElementById('root');

if (root) {
  ReactDOM.hydrate(client, root);
}
