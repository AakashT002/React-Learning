import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import { Provider } from 'react-redux';
import routes from './routes';
import './index.css';
import App from './App';
import MyForm from './Form';
import registerServiceWorker from './registerServiceWorker';
import { Header } from './Header';
import SimpleDrawer from './SimpleDrawer';
import WebFontLoader from 'webfontloader';
 
 WebFontLoader.load({
   google: {
     families: ['Roboto:300,400,500,700', 'Material Icons'],
   },
 });
 


// ReactDOM.render(
//    <Router>
//      <App>{routes}</App>
//    </Router>
//  , document.getElementById('root'));
ReactDOM.render(<MyForm/>, document.getElementById('root'));

