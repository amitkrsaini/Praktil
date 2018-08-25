import React from 'react';
import MoreAboutService from './moreAboutService';

function Testimonial(){
      return (
        //<!-- h2-testimonial-area-start -->
    <div class="h2-testimonial-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12 text-center">
                    <div class="section-title">
                        <h2 class="title">Hetaste Jobben</h2>
                    </div>
                </div>
            </div>
            <div class="h2-testimonial-carousel owl-carousel">
                <div class="service-box-5 service-box-4">
                        <div><img src={require("./../../img/allt/blog-1.jpg")} alt="" /></div>
                        <div class="icon">
                            <span class="color-1 flaticon-sketch"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Kundservice Praktikant?</h2>
                            <p class="text">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
                            <p class="bottom-ref">V.3-10 . Stockholm . Kundservice</p>
                            <a href="#" class="link Praktil-link-3 hvr-bs animated" title="">Läs mer</a>
                        </div>
                    </div>
                     <div class="service-box-5 service-box-4">
                        <div><img src={require("./../../img/allt/blog-1.jpg")} alt=""/></div>
                        <div class="icon">
                            <span class="color-1 flaticon-sketch"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Kundservice Praktikant?</h2>
                            <p class="text">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
                            <p class="bottom-ref">V.3-10 . Stockholm . Kundservice</p>
                            <a class="link Praktil-link-3 hvr-bs animated" href="#readMore" data-toggle="modal" data-target="#readMore">Läs mer</a>
                        </div>
                    </div> <div class="service-box-5 service-box-4">
                        <div><img src={require("./../../img/allt/blog-1.jpg")} alt="" /></div>
                        <div class="icon">
                            <span class="color-1 flaticon-sketch"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Kundservice Praktikant?</h2>
                            <p class="text">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
                            <p class="bottom-ref">V.3-10 . Stockholm . Kundservice</p>
                            <a class="link Praktil-link-3 hvr-bs animated" href="#readMore" data-toggle="modal" data-target="#readMore">Läs mer</a>
                        </div>
                    </div> <div class="service-box-5 service-box-4">
                        <div><img src={require("./../../img/allt/blog-1.jpg")} alt="" /></div>
                        <div class="icon">
                            <span class="color-1 flaticon-sketch"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Kundservice Praktikant?</h2>
                            <p class="text">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
                           <p class="bottom-ref">V.3-10 . Stockholm . Kundservice</p>
                           <a class="link Praktil-link-3 hvr-bs animated" href="#readMore" data-toggle="modal" data-target="#readMore">Läs mer</a>
                        </div>
                    </div>
            </div>
        </div>
        <div id="readMore" class="modal fade " role="dialog">
            <MoreAboutService/>         
        </div>
    </div>
    //<!-- h2-testimonial-area-end -->
    
    
      );
    
  }


export default Testimonial;