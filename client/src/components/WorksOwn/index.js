import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>
          <FontAwesomeIcon icon="book"/>
        </Avatar>
      </ListItemAvatar>
        <ListItemText 
          primary="The Lion King" 
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                <strong>Description —</strong> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </Typography>
              <span style={{ display: "flex", justifyContent: "center"}}>
              <Button size="small" color="primary">
                Read More...
              </Button>
              </span>
            </React.Fragment>
          }
          />
      <ListItemSecondaryAction>
        <IconButton>
          <FontAwesomeIcon icon="edit"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>
          <FontAwesomeIcon icon="scroll"/>
        </Avatar>
      </ListItemAvatar>
        <ListItemText 
          primary="The Little Mermaid" 
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                <strong>Description —</strong> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </Typography>
              <span style={{ display: "flex", justifyContent: "center"}}>
              <Button size="small" color="primary">
                Read More...
              </Button>
              </span>
            </React.Fragment>
          }
          />
      <ListItemSecondaryAction>
        <IconButton>
          <FontAwesomeIcon icon="edit"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>
          <FontAwesomeIcon icon="sticky-note"/>
        </Avatar>
      </ListItemAvatar>
        <ListItemText 
          primary="Three Little Pigs" 
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                <strong>Description —</strong> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </Typography>
              <span style={{ display: "flex", justifyContent: "center"}}>
              <Button size="small" color="primary">
                Read More...
              </Button>
              </span>
            </React.Fragment>
          }
          />
      <ListItemSecondaryAction>
        <IconButton>
          <FontAwesomeIcon icon="edit"/>
        </IconButton>
      </ListItemSecondaryAction>
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