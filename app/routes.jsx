import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'views/App';
import Home from'views/Home';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  );
  // return (
  //   <Route path="/" component={App}>
  //     <IndexRoute component={Vote} />
  //     <Route path="login" component={LoginOrRegister} />
  //     <Route path="dashboard" component={Dashboard} />
  //     <Route path="about" component={About} />
  //   </Route>
  // );
};
