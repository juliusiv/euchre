import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.output.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";


const AppWithHistory = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
};


ReactDOM.render(
  <AppWithHistory />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
