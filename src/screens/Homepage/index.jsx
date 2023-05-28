import React from 'react';
import Banner from './components/Banner'
import Header from './components/Header'
import Listing from './components/Listing'

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Listing />
    </React.Fragment>
  );
}

export default Homepage;