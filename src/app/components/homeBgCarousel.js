import React from 'react';


class HomeBgCarousel extends React.Component{
    render() {
        return (   
    //<!-- h3-slider-area-start -->
    <div class="h3-slider-area owl-carousel">
        <div class="h3-slider-box">
            <div class="img bg-with-black">
                <img src={require("./../../img/anvandare/Landing_Bakgrundsbild.jpg")} alt=""/>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 col-sm-12 col-12">
                            <h2 class="title animated">Lättaste sättet att hitta <span>
Praktikplatser online</span></h2>
                            <a class="link Praktil-link-3 hvr-bs animated" href="#">Se Praktikplaster </a>
                            <a class="link Praktil-link-4 hvr-bs animated" href="#">Skapa konto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
    //<!-- h3-slider-area-end -->
);
}
};


export default HomeBgCarousel;