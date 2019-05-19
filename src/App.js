import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './pages/homePage';
import profileOwn from "./pages/profileOwn"
import profileOther from "./pages/profileOther"
import LoginPage from './pages/loginPage';
import postPage from './pages/postPage';
import postPage from './pages/postPage';

function App(params) {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/home' component={homePage} />
        <Route exact path='/admin' component={profileOwn} />
        <Route exact path='/view' component={profileOther} />
        <Route exact path='/post' component={postPage} />
        <Route exact path='/all' component={postPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
