import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


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
    fontSize: "6vh",
    color: "#ffff",
    margin: 0
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

const featuredPosts = [
  {
    title: 'Three Little Pigs',
    author: 'Writ.ink Team',
    cat: 'article',
    date: 'Nov 11',
    words: 500,
    views: 500,
    likes: 100,
    time: 52,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }
];


function SimpleCard(props) {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar alt="Remy Sharp" src="http://www.iconninja.com/files/627/232/1000/male-person-geek-man-avatar-user-icon.svg" className={classes.bigAvatar} />
        <Typography style={{  }} className={classes.title} color="textSecondary" gutterBottom>
          Featured Article - {featuredPosts[0].author}
        </Typography>

        <Chip style = {{height: 25, fontSize: "1.5vh", backgroundColor: "#3d566e"}}
          label={featuredPosts[0].cat}
          clickable
          className={classes.chip}
          color="primary"
        />
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography className={classes.desc} component="p">
          <br />
          {'Writ.Ink is a new place on the Internet where people share ideas and stories that are longer than 140 characters and not just for friends. It’s designed for little stories that make your day better and manifestos that change the world. It’s used by everyone from professional journalists to amateur cooks. It’s simple, beautiful, collaborative, and it helps you find the right audience for whatever you have to say.'}
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