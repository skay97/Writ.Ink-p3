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
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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

function SimpleCard3(props) {
  const { classes } = props;
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Avatar alt="Remy Sharp" src="data:image/png;base64,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" className={classes.bigAvatar} />
        <Typography variant="h5" component="h2">
          {featuredPosts[0].title} - {featuredPosts[0].author}
        </Typography>
        <Chip style = {{height: 25, fontSize: "1.5vh", backgroundColor: "#3d566e"}}
          label={featuredPosts[0].cat}
          clickable
          className={classes.chip}
          color="primary"
        />
        {/* <Typography className={classes.pos} color="textSecondary">
          Exclamation or Noun
        </Typography> */}
        <Typography component="p">
          {/* A popular sallutation.
          <br /> */}
          {"Lorem ipsum dolor amet vHS woke activated charcoal air plant. Polaroid excepteur tacos laborum, nulla leggings ut vape iceland. Actually reprehenderit sed williamsburg sustainable distillery humblebrag pabst iceland. Af la croix ramps before they sold out listicle celiac hashtag adipisicing next level tattooed photo booth jianbing. Mumblecore sed 90's, sriracha hoodie bicycle rights raw denim sartorial prism hammock. Hell of eiusmod aesthetic, est you probably haven't heard of them veniam intelligentsia. Seitan craft beer cronut esse taiyaki labore tumeric ea try-hard gentrify non dreamcatcher."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard3);