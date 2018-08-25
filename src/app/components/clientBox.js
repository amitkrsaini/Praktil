import React from 'react';

class ClientBox extends React.Component{
    render() {
        return ( 
        /*<!-- breadcumb-area-start -->*/        
        <div class="box">
            <img src={require('./../../img/allt/client-view.jpg')} alt="" />
            <div class="content">
                    <h3><strong>MicroAA Labs AB</strong> - Adrian Andersson</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
            </div>
        </div>
        );
    }
  };


export default ClientBox;