import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
class CreateAccount extends React.Component{
    render() {
        return (            
        <div class="modal-dialog createAccount">   
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Skapa konto</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> Aenean commodo ligula eget dolor. Aenean massa.  et magnis dis </p>
            </div>
            <div class="modal-body">
            <div class="content">            
                <div class="container">
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Praktkant">
                            <div class="row">
                                <div class="col-sm-12 col-12 text-center">
                                    <a class="fbBtn" href="#">Logga in med Facebook</a>
                                    <a class="lnBtn" href="#">Logga in med Linkedin</a>                           
                                </div>
                                <div class="col-sm-12 col-12 text-center">
                                    <p>eller</p>
                                    <form action="#" >
                                        <div class="row">
                                            <div class="col-12 cf-input-box">
                                                <input type="text" placeholder="E-post" id="E-post" name="E-post" required=""/>
                                            </div>
                                            <div class="col-12 cf-input-box">
                                                <input type="text" placeholder="Losenord" id="Losenord" name="Losenord" required=""/>
                                            </div>
                                            
                                            <div class="col-12">
                                            <p>For att skapa ett konto maste du godkanna vara<br/>
                                            <strong>anvandarvillkor och integritetspolicy.</strong>
                                            <br/><label class='lab1'> <input type="checkbox"  name="check1" required=""/><span>Jag godkanner</span></label></p>
                                               
                                            </div>
                                            <div class="col-12 cf-input-box">
                                                <button id="submit" class="link Praktil-link-3 hvr-bs animated" name="submit">skapa Konta</button>
                                                <p>Har du konto? <a href='#'>Logga in</a></p>
                                            </div>
                                        </div>
                                    </form>                        
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Foretag">
                            <div class="row">
                                
                                <div class="col-sm-12 col-12 text-center">                                    
                                    <form action="#" >
                                        <div class="row">
                                            <div class="col-12 cf-input-box">
                                                <input type="text" placeholder="Foretagsnamn" id="Foretagsnamn" name="Foretagsnamn" required=""/>
                                            </div>
                                            <div class="col-12 cf-input-box">
                                                <input type="text" placeholder="Organisation Snummer" id="OrganisationSnummer" name="Organisation Snummer" required=""/>
                                            </div>
                                            <div class="col-12 cf-input-box">
                                                <input type="text" placeholder="E-post" id="E-post" name="E-post" required=""/>
                                            </div>
                                            <div class="col-12 cf-input-box">
                                                <input type="text" placeholder="Losenord" id="Losenord" name="Losenord" required=""/>
                                            </div>
                                            
                                            <div class="col-12">
                                            <p>For att skapa ett konto maste du godkanna vara<br/>
                                            <strong>anvandarvillkor och integritetspolicy.</strong>
                                            <br/><label class='lab1'> <input type="checkbox"  name="check1" required=""/><span>Jag godkanner</span></label></p>
                                               
                                            </div>
                                            <div class="col-12 cf-input-box">
                                                <button id="submit" class="link Praktil-link-3 hvr-bs animated" name="submit">skapa Konta</button>
                                                <p>Har du konto? <a href='#'>Logga in</a></p>
                                            </div>
                                        </div>
                                    </form>                        
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>                
            </div>            
            </div>
         </div> 
        );
    }
    };
    
    
    
    export default CreateAccount;