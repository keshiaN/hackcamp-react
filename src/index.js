import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/store';

/**
 * Provider is an higher order component.
 * It allows its children to access the redux store without having to pass it as a prop.
 *
 * You should wrap your App Component in a Provider using
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
 */
const Index = () => <App />;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
