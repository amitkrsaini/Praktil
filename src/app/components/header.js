import React from 'react';
import CreateAccount from './newUserAccount';
import UserLogin from './login';


class Header extends React.Component{
    render() {
        return (         
        <header class="header-3">
        <div class="h3-header-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-4 col-8">
                        <div class="h1-logo">
                            <a href="/">
                                <img src= {require('./../../img/allt/Logo_Praktil.png')}  alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-5 col-sm-8 col-12">
                        <div class="responsive-menu d-lg-none"></div>
                        <div class="menu d-none d-lg-block">
                            <nav>
                                <ul id="menu">
                                    <li><a href="/for-foretag">För Företag</a></li>
                                    <li><a href="05_service.html">Praktikplaster</a></li>
                                    <li><a href="08_project-3-grid.html">Om Praktil</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                          <div class="h1hba-get-quote">
                            <a class="link hvr-bs Praktil-link" href="#Login" data-toggle="modal" data-target="#Login">Logga in</a>
                            <a class="link hvr-bs Praktil-link-2" href="#CreateAccount" data-toggle="modal" data-target="#CreateAccount">Skapa konto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="Login" class="modal fade" role="dialog">
            <UserLogin/>         
        </div>
        <div id="CreateAccount" class="modal fade" role="dialog">
            <CreateAccount/>        
        </div>

        </header>
       );
    }
  };


export default Header;