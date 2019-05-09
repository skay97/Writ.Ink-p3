import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        minWidth: 275,
      },
    media: {
        height: 140,
      },
    centerText: {
        textAlign: "center",
      },
    flexDisplay: {
        diplay: "flex",
      },
    centerJustify: {
        justifyContent: "center",
      },
    spacing: {
      padding: theme.spacing.unit * 2,
    },
  });

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid container spacing={24}>
    <Grid item xs={2}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://lorempixel.com/output/people-q-c-250-100-1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="p" className={classes.centerText}>
            Adrian Morales
          </Typography>
          <Typography gutterBottom variant="h6" component="p" className={classes.centerText}>
            Following
          </Typography>
          <Typography component="p" className={classes.centerText}>
              100
          </Typography>
          <Typography gutterBottom variant="h6" component="p" className={classes.centerText}>
            Followers
          </Typography>
          <Typography component="p" className={classes.centerText}>
              100
          </Typography>
          </CardContent>
          <CardContent>
          <Grid container spacing={16} className={classes.justifyContent}>
          <Grid item>
          <Button variant="contained" color="primary">
          Subscribe
          </Button>
          </Grid>
          <Grid item>
          <Button variant="contained" color="secondary">
            Donate
          </Button>
          </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);