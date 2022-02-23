import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import EJ02 from './Ej02Class'
import Ej7connectionList from './Ej7connectionList'
import Ej7CustomHookConnectionList from './Ej7CustomHookConnectionList'
import Ej08FormInsert from './Ej08FormInsert'
import EJ10FrontendMayores from './EJ10FrontendMayores'
import Ej11Login from './Ej11Login'
import ComponenteMui from './ComponenteMui'

ReactDOM.render(
  <React.StrictMode>
    <ComponenteMui/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
