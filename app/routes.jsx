import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Vote from 'containers/Vote';
import About from 'containers/About';
import LoginOrRegister from 'containers/LoginOrRegister';
import Dashboard from 'containers/Dashboard';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Vote} />
      <Route path="login" component={LoginOrRegister} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="about" component={About} />
    </Route>
  );
};
