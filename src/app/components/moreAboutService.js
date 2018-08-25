
import React from 'react';
class MoreAboutService extends React.Component{
    render() {
        return (            
        <div class="modal-dialog modal-lg readMoreService">   
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"></h4>                
            </div>
            <div class="modal-body">
                       
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12 ">
                            <img src={require("./../../img/allt/aaLogo.jpg")} alt=""/>
                            <h4 class='mar-bot-10'>Arbetsgivare</h4>
                            <p><a href="#">MicroAA Labs AB</a></p>
                            <h4 class='mar-bot-10 mar-top-20'>Ort</h4>
                            <p>Stockholm</p>
                            <h4 class='mar-bot-10 mar-top-20'>Antal Platser</h4>
                            <p>1/4</p>
                            <h4 class='mar-bot-10 mar-top-20'>Ansokning</h4>
                            <p>Senast 2018-05-25</p>
                            <p class='mar-top-20'><a href='#' class='link Praktil-link-3 hvr-bs animated col-sm-12 text-center'>Ansok Nu</a></p>
                            <p><a href='#' class='link Praktil-link-3 hvr-bs animated col-sm-12 text-center'>Spara</a></p>
                                                 
                        </div>
                        <div class='col-lg-9 col-md-12 col-sm-12 col-12 bord'> 
                            <h2 class='mar-bot-20'>Kundservice Praktik</h2>
                            <h4 class='mar-bot-10'>Vi Soker:</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam lorem, luctus nec ante nec, lacinia vestibulum mauris. Proin aliquet faucibus pretium. Nulla facilisi</p>
                            <h4 class='mar-bot-10 mar-top-20'>Om Tjansten:</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam lorem, luctus nec ante nec, lacinia vestibulum mauris. Proin aliquet faucibus pretium. Nulla facilisi. Pellentesque eu nisl non leo gravida auctor ac quis urna. Pellentesque tincidunt, ante eget ullamcorper sagittis, arcu nisl tincidunt nunc, at blandit arcu lectus sed risus. </p>
                            <h4 class='mar-bot-20 mar-top-20'>Krav:</h4>
                            <ul>
                            <li>Gar handels.</li>
                            <li>Erfarenhet inom lagerarbete</li>
                            <li>Du ar positiv och glad</li>
                            </ul>

                            <h4 class='mar-bot-10 mar-top-20'>Ansokan</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam lorem, luctus nec ante nec, lacinia vestibulum mauris. Proin aliquet faucibus pretium. Nulla facilisi.</p>
                        </div>
                    </div>                   
                </div>
                <div class="container footerContainer">
                    <div class="row">
                        <div class="col-lg-4">
                            <h4 class='mar-bot-20 headWhite'>Liknande Praktikplatser</h4>
                        </div>
                        <div class="col-lg-8">
                            <div class='whiteBox'>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <h4 class='mar-bot-20'>ICA Maxi Stockholm soker praktikant till lager</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam lorem, luctus nec ante nec, lacinia vestibulum mauris. Proin aliquet faucibus pretium. Nulla facilisi.</p>
                                    </div>
                                    <div class="col-lg-4 text-right">
                                        <img src={require("./../../img/allt/aaLogo.jpg")} width='70' alt=""/>
                                        <p><a href="#">MicroAA Labs AB</a></p>
                                        <p class='mar-top-20'><a href='#' class='link Praktil-link-3 hvr-bs animated col-sm-12 text-center'>Ansok Nu</a></p>
                                    </div>
                                </div>
                            </div>

                             <div class='whiteBox'>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <h4 class='mar-bot-20'>ICA Maxi Stockholm soker praktikant till lager</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam lorem, luctus nec ante nec, lacinia vestibulum mauris. Proin aliquet faucibus pretium. Nulla facilisi.</p>
                                    </div>
                                    <div class="col-lg-4 text-right">
                                        <img src={require("./../../img/allt/aaLogo.jpg")} width='70' alt=""/>
                                        <p><a href="#">MicroAA Labs AB</a></p>
                                        <p class='mar-top-20'><a href='#' class='link Praktil-link-3 hvr-bs animated col-sm-12 text-center'>Ansok Nu</a></p>
                                    </div>
                                </div>
                            </div>
                            
                        
                        </div>
                    </div>
                
                </div>
                          
            </div>            
            </div>
         </div> 
        );
    }
    };
    
    
    
    export default MoreAboutService;