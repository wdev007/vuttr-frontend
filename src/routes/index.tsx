import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Tool from '../pages/Tool';
import NotFoundPage from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/tool/:id" component={Tool} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Routes;
