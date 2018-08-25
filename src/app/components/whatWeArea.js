import React from 'react';


class WhatWeArea extends React.Component{
    render() {
        return (  
        //<!-- h3-what-we-area-start -->
        <div class="h3-what-we-area">
            <div class="h3-what-we-banner">
            <img src= {require('./../../img/svgIcoThree.svg')}  alt=""/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-7 col-sm-12 col-12">
                        <div class="section-title">
                            <h6 class="intro">Praktil är en digital plattform som hjälper dig få dina första arbetslivserfarenheter</h6>
                            <a class="link Praktil-link-3 hvr-bs animated" href="#">Skapa konto</a>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //<!-- h3-what-we-area-end -->
    );
}
};


export default WhatWeArea;