import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Main from '~/pages/Main';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" render={props => <SignIn {...props} />} />
      <Guest path="/signup" render={props => <SignUp {...props} />} />
      <Private path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
