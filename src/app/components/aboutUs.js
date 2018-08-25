import React from 'react';

class AboutUs extends React.Component{
    render() {
        return ( 
       /*<!-- h2-about-area-start -->*/
    
    <div class="h2-about-area about-us-page">    
        <div class="h2-about-banner"><img src={require("./../../img/allt/about-banner.png")} alt="" /></div>
        <div class="h2-about-bg"><img src={require("./../../img/allt/about-bg-shape.png")} alt="" /></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-7 col-sm-12 col-12">
                    <div class="h2-about-section-title section-title">
                        <h2 class="title">Så fungerar det.</h2>
                    </div>
                    <div class="service-box-3">
                        <div class="icon">
                            <span class="color-1 flaticon-cubes"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Skapa din företagsprofil</h2>
                            <p class="text">Skapa en foretagsprofil erkelt genom att <a href="#">klicka har</a>
Med Praktil tar det under 10 minuter och är 100% kostnadsfritt att göra din profil. 
</p>
                        </div>
                    </div>
                    <div class="service-box-3">
                        <div class="icon">
                            <span class="color-2 flaticon-money"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Skapa en annons med vårt enkla verktyg.</h2>
                            <p class="text">När din profil är fullstånd a sa kommer dukunna skapa din första annons. 
Annonser har en fast kostnad på 150 kr/annons och fakureras enkelt automatiskt varje månad. Om du inte skapat någon annons så faktureras du självklart inte. 
</p>
                        </div>
                    </div>
                    <div class="service-box-3">
                        <div class="icon">
                            <span class="color-3 flaticon-team"></span>
                        </div>
                        <div class="content">
                            <h2 class="title">Bli fakturerad automatiskt i sluteu av månaden.</h2>
                            <p class="text">Praktil kommer fakturera dig varje månad för de annonser du publicerat. 
Annonskostnaden är 150kr / vecka.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    /*<!-- h2-about-area-end -->*/

        );
    }
  };


export default AboutUs;