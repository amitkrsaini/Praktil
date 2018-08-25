import React from 'react';

class Footer extends React.Component{
    render() {
      return (
            //<!-- footer-area-start -->
            <footer class="h1-footer">
            <div class="h1-footer-top-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-8 col-12">
                            <div class="h1ftaw-info h1fta-widget">
                                <div class="f1logo">
                                    <img src={require('./../../img/allt/Logo_Praktil.png')} alt="" />
                                </div>
                                <p class="text">Lättaste sättet att hitta Praktikplatser online Praktil är et jobbsökningsplatform tillämpact för praktikanter</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-12">
                            <div class="h1ftaw-link h1fta-widget">
                                <h4 class="title">Navigera</h4>
                                <ul class="links">
                                    <li><a href="#">Startsida</a></li>
                                    <li><a href="#">För företag</a></li>
                                    <li><a href="#">skapa konto</a></li>
                                    <li><a href="#">Användarvillkor</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-9 col-sm-8 col-12">
                            <div class="h1ftaw-subscribe h1fta-widget">
                                <div class="form-box">
                                <h4 class="title">Kontakta Oss</h4>
                                <form action="#">
                                    <div class="footer-subscribe-box">
    
                                         <div class="form-box-table">
                                            <div class="form-box-table-cell w75" >
                                                <input type="text" placeholder="Email" />
                                                <textarea placeholder="Meddelande"></textarea>
                                            </div>
                                            <div class="form-box-table-cell wright">
                                                <input type="submit" value="Skicka" />
                                            </div>
                                        </div>                                   
                                    </div>
                                </form>
                                </div>
    
                                <ul class="f-social">
                                    <li><p class="f-kont-links"><a href="mailto:Kontakt@praktil.se" target="_top">Kontakt@praktil.se</a><a href="tel:070-000 00 00">070-000 00 00</a></p></li>
                                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            //<!-- footer-area-end -->
        );
    }
  };


export default Footer;