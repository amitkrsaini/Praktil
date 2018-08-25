import React from 'react';
import Loading from './loader';
import Header from './header';
import BreadCrumbs from './breadCrumbs';
import AboutUs from './aboutUs';
import Footer from './footer';
import Testimonial from './testimonial';
import WhatWeArea from './whatWeArea';
import ClientBox from './clientBox';

function ForForetag() {
    return (
      <div className="mainDiv">
        <Loading/>
        <Header/>
        <BreadCrumbs/> 
        <AboutUs/>
        <Testimonial/> 
        <WhatWeArea/>
        <div class="clients-views">
            <div class="container">
            <ClientBox/>  
            <ClientBox/>  
            <ClientBox/>              
            </div>
        </div>
   
         
        <Footer/>
      </div> 
    );
}

export default ForForetag;
