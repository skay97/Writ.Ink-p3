import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import PrimarySearchAppBar from "../components/AppBar/Appbar"
>>>>>>> origin/development
import Card from "../components/Card/Card";
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Card2 from "../components/Card/Card2"
import Card3 from "../components/Card/Card3"
<<<<<<< HEAD


export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p>.Writ-Ink V -.1</p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">See Posts &raquo;</Link></p>
    </div>
    <div className="Container" style ={{backgroundColor:"#DCDCDC"}}>
=======
import Footer from "../components/Footer/Footer";

class App extends React.Component {

  render() {
    return (
      <div className="Container" style={{ backgroundColor: "#DCDCDC" }}>

        {/* <PrimarySearchAppBar /> */}

        {/* <div>
          <p>
            <Link className="btn btn-primary btn-lg" to="/posts" role="button">See Posts &raquo;</Link>
          </p>
        </div> */}
>>>>>>> origin/development

        <Grid container
          spacing={24}
          justify="center"
        >
          <Grid item xs={12} sm={10} >
            <Card />
          </Grid>
        </Grid>

        <Grid container
          spacing={24}
          justify="center"
        >
          <Grid item xs={12} sm={5}>
            <Card3 />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card2 />
          </Grid>

        </Grid>

        <Grid container
          spacing={24}
          justify="center"
        >
          <Grid item xs={12} sm={5}>
            <Card3 />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card2 />
          </Grid>
        </Grid>

<<<<<<< HEAD
      </div>

  </div>
);
=======

        {/* <Footer /> */}

      </div>
    )
  }
}

export default (App);

// export default () => (
//   <div>

//     { /*Main jumbotron for a primary marketing message or call to action*/}
//     <div className="jumbotron">
//       <h1 className="display-3">Welcome!</h1>
//       <p>.Writ-Ink V -.1</p>
//       <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">See Posts &raquo;</Link></p>
//     </div>

//   </div>
// );
>>>>>>> origin/development
