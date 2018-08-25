import React from 'react';
import Loading from './loader';
import Header from './header';
import Footer from './footer';
import HomeBgCarousel from './homeBgCarousel';
import SpecialLink from './specialLink';
import Testimonial from './testimonial';
import WhatWeArea from './whatWeArea';
import AboutArea from './homeAboutArea';
import ServiceArea from './homeServiceArea';


class Home extends React.Component{
  render() {
      return ( 
      <div className="mainDiv">
        <Loading/>
        <Header/>
        <HomeBgCarousel/>
        <SpecialLink/>
        <ServiceArea/>
        <AboutArea/>
        <WhatWeArea/>
        <Testimonial/>        
        <Footer/>
      </div> 
      );
    }
  };
export default Home;
