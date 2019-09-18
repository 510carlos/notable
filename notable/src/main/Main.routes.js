import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main'

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default MainRoutes;