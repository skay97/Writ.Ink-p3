import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      marginTop: '2rem',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  });
  
  function CustomizedInputBase(props) {
    const { classes } = props;
  
    return (
      <Paper className={classes.root} elevation={1}>
        <InputBase className={classes.input} placeholder="Enter New Project Title" />
        <Divider className={classes.divider} />
        <Button variant="contained" style={{backgroundColor: "green", color:"white"}} className={classes.button}>
        Create
        </Button>
      </Paper>
    );
  }
  
  CustomizedInputBase.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomizedInputBase);