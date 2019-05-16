import React from 'react';
import { Link } from 'react-router-dom';



export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p>.Writ-Ink V -.1</p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">See Posts &raquo;</Link></p>
    </div>

  </div>
);