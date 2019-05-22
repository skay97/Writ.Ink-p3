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
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
    backgroundColor: "black",
    marginTop: "1rem",
    marginBottom: "0.5rem",
  },
  extendedIcon: {
    marginBottom: theme.spacing.unit,
  },
  label: {
    paddingTop: '0',
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
      <Paper className={classes.root} elevation={1}>
        <Grid
          classes = {{label: classes.label}} 
          container direction="row" 
          justify="center" 
          alignItems="flex-end"
        >
        <Grid>
        <Typography variant="h6" style={{color: "white"}}>
          <strong>About Me: </strong>         
          Hakuna Matata!
          What a wonderful phrase
          Hakuna Matata!
          Ain't no passing craze
          It means no worries
          For the rest of your days
          Yeah, sing it, kid!
          It's our problem-free philosophy
          Hakuna Matata!  
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