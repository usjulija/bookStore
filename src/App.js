import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Store from './components/Store';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/store" component={Store} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
