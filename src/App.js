import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileOwn from './pages/ProfileOwn'
import ProfileOther from './pages/ProfileOther';
import LoginPage from './pages/loginPage';

function App(params) {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/admin' component={ProfileOwn} />
        <Route exact path='/view' component={ProfileOther} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;