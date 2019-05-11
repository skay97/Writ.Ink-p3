import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    top: '19rem',
    marginLeft: '2rem',
  },
  align: {
    display: 'flex',
    justifyConter: 'center',
  }
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <FontAwesomeIcon icon="book"/>
        </Avatar>
        <ListItemText 
          primary="The Lion King" 
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                <strong>Description —</strong> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </Typography>
              <Grid container style={{justifyContent: "center"}}>
              <Grid item>
              <Button size="small" color="primary" className={classes.align}>
                Read More...
              </Button>
              </Grid>
              </Grid>
            </React.Fragment>
          }
          />
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem>
        <Avatar>
        <FontAwesomeIcon icon="scroll"/>
        </Avatar>
        <ListItemText 
          primary="The Little Mermaid" 
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                <strong>Description —</strong> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </Typography>
              <Grid container style={{justifyContent: "center"}}>
              <Grid item>
              <Button size="small" color="primary" className={classes.align}>
                Read More...
              </Button>
              </Grid>
              </Grid>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>
        <FontAwesomeIcon icon="sticky-note"/>
        </Avatar>
        <ListItemText 
          primary="Three Little Pigs" 
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                <strong>Description —</strong> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </Typography>
              <Grid container style={{justifyContent: "center"}}>
              <Grid item>
              <Button size="small" color="primary" className={classes.align}>
                Read More...
              </Button>
              </Grid>
              </Grid>
            </React.Fragment>
          }
        />
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
    </List>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);