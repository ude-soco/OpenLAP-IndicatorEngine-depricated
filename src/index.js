import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/global.scss';
import './assets/js/global';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
