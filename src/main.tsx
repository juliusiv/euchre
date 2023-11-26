import { render } from 'preact'
import './index.css';
import './tailwind.output.css';
import App from './App';
import { HashRouter } from "react-router-dom";


render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')!
);
