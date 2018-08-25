import React from 'react';


class HomeAboutArea extends React.Component{
    render() {
        return ( 
        //<!-- h3-about-area-start -->
    <div class="h3-about-area" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                    <div class="clearfix">
                        <div class="row justify-content-center ">
                            <div class="col-lg-9 col-md-8 col-sm-12 col-12">
                                <div class="section-title">
                                    <h6 class="intro">Vi hjälper dig ut i arbetslivet</h6>
                                    <h2 class="title">Enkelt & Digitalt</h2>
                                    <p><q>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</q></p>
                                </div>
                                <ul class="what-we-list">
                                    <li>Filtrera bland 100-tals praktikplatser</li>
                                    <li>Få anpassade annonser direkt på mailen</li>
                                    <li>Ansök enkelt med din profit</li>
                                </ul>
                                <a class="link Praktil-link-3 hvr-bs animated" href="#">Försäljning</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="h3-about-banner">
                    <img src= {require('./../../img/svgIcoTwo.svg')}  alt=""/>

                    </div>
                </div>
            </div>
        </div>
    </div>
    //<!-- h3-about-area-end --> 
        );
    }
};

export default HomeAboutArea;