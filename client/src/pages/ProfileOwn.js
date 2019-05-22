import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faStickyNote, faScroll, faBookmark } from '@fortawesome/free-solid-svg-icons';
//import AuthorBanner from '../components/AuthorBanner';
import ProfileCard from '../components/ProfileCard';
//import CategoryTags from '../components/CategoryTags'
import Grid from '@material-ui/core/Grid';
//import CreateProject from '../components/CreateProject';
import Card2 from '../components/Card/Card2';
//import Card3 from '../components/Card/Card3';
//import Footer from "../components/Footer/Footer";
//import Appbar from "../components/AppBar/Appbar";

library.add([faBook, faScroll, faStickyNote, faBookmark]);

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  }
});

function UserProfile(props) {

  const { classes } = props;

  return (
  <React.Fragment>
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={8}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={40}
        >
          <Grid item xs={12} sm={3}>
            <ProfileCard/> 
          </Grid>
          <Grid item xs={12} sm={9}>
            <Card2 />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile);