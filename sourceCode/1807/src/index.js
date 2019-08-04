import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

//引入的作业
<<<<<<< HEAD
// import Home from '../src/home';
import Home from '../src/about';
=======
import Html from './html/index'
>>>>>>> 0df16362d735ed1c18b173c49d90e300955ebf9a

ReactDOM.render(<Html />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
