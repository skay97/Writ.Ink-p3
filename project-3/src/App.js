import React from 'react';
//import './App.css';
import AuthorBanner from './components/AuthorBanner';
import BiographyCard from './components/BiographyCard';
import Grid from '@material-ui/core/Grid';
import Works from './components/Works';

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
