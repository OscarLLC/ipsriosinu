import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../page/Home/App';
import NavbarLogo from '../Components/Navbar';
import Slider  from './Banner/Slider';
import { Hiro } from '../Components/Hiro';
import { WeIps } from './WeIps';
import { Footer } from './Footer';
import { Nosotros } from '../page/Nosotros';
import { Contactanos } from '../page/Contactanos';
import ContactUs from '../Components/ContactForm'


    
function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route  path='/NavbarLogo' component={NavbarLogo} />
                <Route  path='/Slider' component={Slider} />
                <Route  path='/Hiro' component={Hiro} />
                <Route  path='/WeIps' component={WeIps} />
                <Route  path='/Footer' component={Footer} />
                <Route  path='/Nosotros' component={Nosotros} />
                <Route  path='/ContactUs' component={ContactUs} />
                <Route  path='/Contactanos' component={Contactanos} />
                {/* <Route component={Error} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

