import {  Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { GridContainer, PrimaryButton } from './Banner.styled.ts';




const Banner = () => {
  return (
    <React.Fragment>
      <GridContainer container>
        <Grid item xs={12} className='banner-homepage'>
          <Container>
            <Grid container className='top-container'>
              <Grid item xs={12}>
                <Typography component="h2" variant='h2'>
                  Your trusted
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h2" variant='h2'>
                  Exchange Partners
                </Typography>
              </Grid>

              <Grid container className='mid-container'>
                <Grid item xs={12}>
                  <Typography component="h6" variant='h6'>
                    Drc-Express is the easiest, safest and fastest way to 
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="h2" variant='h6'>
                    buy & sell crypto assets
                  </Typography>
                </Grid>
              </Grid>

              <Grid container className='bottom-container'>              
                <Grid item xs={12}>
                  <PrimaryButton variant="contained">
                    Connect Wallet
                  </PrimaryButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </GridContainer>
      
     
      
    </React.Fragment>
  );
}

export default Banner;
