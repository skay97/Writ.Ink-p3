import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    backgroundColor: "black",
    marginTop: "1rem",
  },
  extendedIcon: {
    marginBottom: theme.spacing.unit,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
      <Paper className={classes.root} elevation={1}>
        <Grid container direction="row" justify="center" alignItems="flex-end">
        <Grid item xs={5}>
        <Typography component="p" style={{color: "white"}}>
          <strong>About Me:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies id massa vitae volutpat. Praesent tempus lorem purus, at iaculis nunc sollicitudin ac. Donec finibus sed urna a malesuada.
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