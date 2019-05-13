import React from 'react';
//import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStickyNote, faScroll, faBookmark } from '@fortawesome/free-solid-svg-icons';
import AuthorBanner from '../components/AuthorBanner';
import ProfileCard from '../components/ProfileCard';
import CategoryTags from '../components/CategoryTags'
import Grid from '@material-ui/core/Grid';
import Works from '../components/Works';

library.add([faBook, faScroll, faStickyNote, faBookmark]);

function UserProfile() {
  return (
    <React.Fragment>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={12}>
          <AuthorBanner/>
        </Grid>
       </Grid>
       <Grid container>
        <Grid item xs={3}>
          <ProfileCard/>    
        </Grid>
        <Grid item xs={9}>
          <CategoryTags/>
          <Works/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default UserProfile;