import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Store from './components/Store';
import Product from './components/Product';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/store" component={Store} />
      <Route path="/store/:productId" component={Product} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
