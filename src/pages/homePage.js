import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import PrimarySearchAppBar from "../components/AppBar/Appbar"
import Card from "../components/Card/Card";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Card2 from "../components/Card/Card2"

const style = {
  Card: {
    padding: 200,
    marginTop: 100
  }
}
const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
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
  const { classes } = props;
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

      <footer className={classes.footer}>
        <Typography className={classes.typo} variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography className={classes.typo} variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>

    </>
  );
}

export default withStyles(styles)(App);