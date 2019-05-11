import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './pages/userProfile';
import LoginPage from './pages/loginPage';

function App(params) {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/admin' component={UserProfile} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;