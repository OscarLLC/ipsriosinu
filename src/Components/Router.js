import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../page/Home/App';
// import Header from '../Components/Header';
// import  Form  from '../Components/Form';
// import { Error } from '../Components/Error';
import NavbarLogo from '../Components/Navbar';
import Slider  from './Banner/Slider';
import { Hiro } from '../Components/Hiro'
import { WeIps } from './WeIps'
    
function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                {/* <Route  path='/Header' component={Header} />
                <Route  path='/Form' component={Form} /> */}
                <Route  path='/NavbarLogo' component={NavbarLogo} />
                <Route  path='/Slider' component={Slider} />
                <Route  path='/Hiro' component={Hiro} />
                <Route  path='/WeIps' component={WeIps} />

                {/* <Route component={Error} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

