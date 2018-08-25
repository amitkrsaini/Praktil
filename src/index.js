import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/jquery-ui.css';
import './css/fontawesome-all.min.css';
import './fonts/flaticon.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/animate.css';
import './css/slicknav.min.css';
import './css/style.css';
import './css/responsive.css';
import Home from './app/components/home';
import ForForetag from './app/components/foretag';


ReactDOM.render( 
  <BrowserRouter>
  <React.Fragment>
    <Route exact path="/" component={Home} /> 
    <Route path="/for-foretag" component={ForForetag} />     
 </React.Fragment>
</BrowserRouter>, document.getElementById('root')
);