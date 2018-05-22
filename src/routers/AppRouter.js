import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
