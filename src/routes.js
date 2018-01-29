import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage';


export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/secondpage" component={SecondPage} />
  </Switch>
);