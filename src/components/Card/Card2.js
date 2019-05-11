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

function SimpleCard2(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Avatar alt="Remy Sharp" src="http://www.iconninja.com/files/761/334/432/female-user-girl-person-glasses-avatar-icon.svg" className={classes.bigAvatar} />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          He
          {bull}
          llo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Exclamation or Noun
        </Typography>
        <Typography component="p">
          A popular sallutation.
          <br />
          {"Lorem ipsum dolor amet vHS woke activated charcoal air plant. Polaroid excepteur tacos laborum, nulla leggings ut vape iceland. Actually reprehenderit sed williamsburg sustainable distillery humblebrag pabst iceland. Af la croix ramps before they sold out listicle celiac hashtag adipisicing next level tattooed photo booth jianbing. Mumblecore sed 90's, sriracha hoodie bicycle rights raw denim sartorial prism hammock. Hell of eiusmod aesthetic, est you probably haven't heard of them veniam intelligentsia. Seitan craft beer cronut esse taiyaki labore tumeric ea try-hard gentrify non dreamcatcher."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard2);