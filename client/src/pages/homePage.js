import React from 'react';
import PrimarySearchAppBar from "../components/AppBar/Appbar"
import Card from "../components/Card/Card";
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Card2 from "../components/Card/Card2"
import Card3 from "../components/Card/Card3"
import Footer from "../components/Footer/Footer";


class App extends React.Component {

  render() {
    return (
      <div className="Container" style ={{backgroundColor:"#DCDCDC"}}>

        <PrimarySearchAppBar />

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


        <Footer />

      </div>
    )
  }
}

export default (App);