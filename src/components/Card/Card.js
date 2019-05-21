import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    minWidth: 275,
    textAlign: "left",
    marginTop: 20,
    backgroundColor: "#A9A9A9",
    color: "white"

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color: "blue"
  },
  title: {
    fontSize: "10vh",
  },
  button: {
    display: "flex",
    color: "blue",
    justifyContent: "flex-start",
  },
  pos: {
    marginBottom: 12,
    color: "white"

  },
  desc: {
    fontSize: "1.05rem",
    color: "#fff"
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};


function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
          <Avatar alt="Remy Sharp" src="http://www.iconninja.com/files/627/232/1000/male-person-geek-man-avatar-user-icon.svg" className={classes.bigAvatar} />
        <Typography style = {{color:"white"}} className={classes.title} color="textSecondary" gutterBottom>
          Featured Article
        </Typography>
        <Typography style = {{color: "white"}}  variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography  className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography className = {classes.desc}  component="p">
          <br />
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </Typography>
      </CardContent>
      <CardActions className={classes.button} >
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);