import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';

// const styles = {
//   card: {
//     minWidth: 275,
//     textAlign: "left",
//     marginTop: 20,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//     color: "blue"
//   },
//   title: {
//     fontSize: 14,
//   },
//   button: {
//     display: "flex",
//     color: "blue",
//     justifyContent: "flex-start",
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   bigAvatar: {
//     margin: 10,
//     width: 100,
//     height: 100,
//   },
// };


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