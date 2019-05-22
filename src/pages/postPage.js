import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const featuredPosts = [
  {
    title: 'The Lion King',
    author: 'Theo B.',
    cat: 'poem',
    date: 'Nov 12',
    words: 500,
    views: 100,
    likes: 30,
    time: 30,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Three Little Pigs',
    author: 'Salman K.',
    cat: 'book',
    date: 'Nov 11',
    words: 500,
    views: 500,
    likes: 100,
    time: 52,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.layout}>
      <Button variant="contained" color="primary" className={classes.button} style={{marginBottom: '2rem'}}>
        Publish Post
      </Button>
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title} - {post.author}
                      </Typography>
                      <Chip
                        label={post.cat}
                        clickable
                        className={classes.chip}
                        color="secondary"
                      />
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date} | {post.words} words | {post.time} min | {post.likes} likes | {post.views} views
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </div>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);