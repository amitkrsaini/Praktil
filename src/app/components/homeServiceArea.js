import React from 'react';


class HomeServiceArea extends React.Component{
    render() {
        return (   
        //<!-- h3-service-box -->
    <div class="h3-service-box" >
        <div class="container">            
            <div class="row justify-content-center no-gutters">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="service-box-5 active service-box-4">
                        <div class="icon">
                        <img src= {require('./../../img/svgIcoOne.svg')}  alt=""/>

                        </div>
                        <div class="content">
                            <h6>Söker du</h6>
                            <h2 class="title">Praktikplats?</h2>
                            <p class="text">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="service-box-5 service-box-4">
                        <div class="icon">
                             <img src={require("./../../img/allt/service_Foretagskonto.png")} alt=""/>
                        </div>
                         <div class="content">
                            <h6>Söker du</h6>
                            <h2 class="title">Praktikanter?</h2>
                            <p class="text">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   // <!-- h3-service-area-end -->    
);
}
};



export default HomeServiceArea;