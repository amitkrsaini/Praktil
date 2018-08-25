import React from 'react';
class UserLogin extends React.Component{
    render() {
        return (            
        <div class="modal-dialog login">   
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Logga In</h4>                
            </div>
            <div class="modal-body">
            <div class="content">            
                <div class="container">
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
                                    <div class="col-12 cf-input-box">
                                        <button id="submit" class="link Praktil-link-3 hvr-bs animated" name="submit">Logga In</button>
                                        <p><a href='#'>Glomt Losenord ?</a><br/><a href='#'>Registrera nytt konto</a></p>
                                    </div>
                                </div>
                            </form>                        
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
    
    
    
    export default UserLogin;