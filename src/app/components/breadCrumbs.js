import React from 'react';

class BreadCrumbs extends React.Component{
    render() {
        return ( 
        /*<!-- breadcumb-area-start -->*/
        <div class="breadcumb-area bg-with-black h3-slider-box">        
            <div class="img">
                <img src={require('./../../img/allt/Företagssida-bg.jpg')} alt="" />
            </div>
            <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-sm-12 col-12">
                                <h2 class="title animated">Vi hjälper dig hitta <span>Unga & Drivna Praktikanter</span></h2>


                                <a class="link Praktil-link-3 hvr-bs animated" href="#">Se Praktikplaster </a>
                                <a class="link Praktil-link-4 hvr-bs animated" href="#">Skapa konto</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        /*<!-- breadcumb-area-end -->*/ 

        );
    }
  };


export default BreadCrumbs;