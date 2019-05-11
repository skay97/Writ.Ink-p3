import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    position: "absolute",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "15rem",
    flexGrow: 1,
    backgroundColor: "black",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  paper: {
    padding: theme.spacing.unit * 5,
    justifyContent: 'center',
    color: 'white',
  },
  extendedIcon: {
    marginBottom: theme.spacing.unit,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
      <Paper className={classes.root} elevation={1}>
        <Grid container className={classes.paper}>
        <Grid item xs={5}>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.extendedIcon} zindex="tooltip">
          Poet
        </Fab>
        <Typography component="p" style={{color: "white"}}>
          <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies id massa vitae volutpat. Praesent tempus lorem purus, at iaculis nunc sollicitudin ac. Donec finibus sed urna a malesuada.
        </Typography>
        </Grid>
        </Grid>
      </Paper>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);