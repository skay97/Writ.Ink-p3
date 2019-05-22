import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

// import Header from './components/header';
// import Footer from './components/footer';
import NoMatch from './components/nomatch';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import UserProfile from './pages/ProfileOwn';
import RequireAuth from './components/auth/require_auth';
import Profile from './components/userinfo/profile';
import Settings from './components/userinfo/settings';
import PostList from './components/blog/post_list';
import PostListSub from './components/blog/post_list_sub';
import PostNew from './components/blog/post_new';
import PostDetail from './components/blog/post_detail/index';
import PostMine from './components/blog/post_mine';

import Header from "./components/AppBar/Appbar";
import Footer from "./components/Footer/Footer";


import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
));

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // We need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {/* <Header /> */}
        {/* <div className="container" id="content"> */}
        <Header />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path="/profile" component={RequireAuth(Profile)} />
            <Route path="/settings" component={RequireAuth(Settings)} />
            <Route exact path='/posts' component={PostList} />
            <Route exact path='/subcriptions' component={PostListSub} />
            <Route path='/posts/new' component={RequireAuth(PostNew)} />
            <Route path='/posts/:id' component={PostDetail} />
            {/* <Route path='/profile/:id' component={UserProfile} /> */}
            {/* compontent did mount to auto sub the newly signed up user */}
            {/* probably easier to make a new page for sign up */}
            {/* <Route path='/subscribe/:id/' component={RequireAuth(SignUp)} />  */}
            <Route path='/author/:id' component={UserProfile} />
            <Route path='/my_posts' component={RequireAuth(PostMine)} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);