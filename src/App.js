import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './pages/homePage';
import profileOwn from "./pages/profileOwn"
import profileOther from "./pages/profileOther"
import LoginPage from './pages/loginPage';

function App(params) {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/home' component={homePage} />
        <Route exact path='/admin' component={profileOwn} />
        <Route exact path='/view' component={profileOther} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
