import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.sass';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
