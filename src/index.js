import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const WrongIndex = () =>
  <div>
    <h1>Mmmmmhhh, looks like there is something wrong with your index.js</h1>
  </div>;

const Index = () =>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>;

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
