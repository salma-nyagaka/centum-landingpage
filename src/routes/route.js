// react libraries
import React from 'react';
// third party packages
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      
    </Switch>
  </BrowserRouter>

);

export default Routes;