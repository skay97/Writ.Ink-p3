import React from 'react';
//import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStickyNote, faScroll } from '@fortawesome/free-solid-svg-icons';
import AuthorBanner from './components/AuthorBanner';
import BiographyCard from './components/BiographyCard';
import Grid from '@material-ui/core/Grid';
import Works from './components/Works';

library.add([faBook, faScroll, faStickyNote]);

function App() {
  return (
    <React.Fragment>
          <AuthorBanner/>
      <Grid container spacing={40}>
        <Grid item xs={3}>
        <BiographyCard/>          
        </Grid>
        <Grid item xs={7}>
          <Works/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
