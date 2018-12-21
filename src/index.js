import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './main/store/store';
import PrimaryLayout from './main/layout/PrimaryLayout';
import App from './main/App';
import * as serviceWorker from './serviceWorker';

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <PrimaryLayout>
      <App/>
    </PrimaryLayout>
  </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();