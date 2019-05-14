import React from 'react';
import PrimarySearchAppBar from "../components/AppBar/Appbar"
import Card from "../components/Card/Card";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card2 from "../components/Card/Card2"
import Footer from "../components/Footer/Footer"

const style = {
  Card: {
    padding: 200,
    marginTop: 100
  }
}
const styles = theme => ({
  footer: {
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    backgroundColor: "#3f51b5",
    color: "#fff"
  },
  typo: {
    color: "white"
  }
});

function App(props) {
  return (
    <>

      <PrimarySearchAppBar />

      <Grid container
        spacing={24}
        justify="center"
      >
        <Grid item xs={6} >
          <Card style={style.Card} />
        </Grid>
      </Grid>
      <Grid container
        spacing={24}
        justify="center"
      >
        <Grid item xs={6} >
          <Card2 style={style.Card} />
        </Grid>

      </Grid>

      {/* <footer className={classes.footer}>
        <Typography className={classes.typo} variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography className={classes.typo} variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer> */}
      <Footer/>

    </>
  );
}

export default withStyles(styles)(App);