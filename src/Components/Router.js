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
import { Servicios } from '../page/Servicios';
import ContactUs from '../Components/ContactForm';
import { Error } from '../Components/Error';
import { PostContact } from '../Components/PostContact';
import Map from '../Components/Map';
import { SedeMonteria } from '../Components/Sedes/Monteria/index';
import { SedeLorica } from '../Components/Sedes/Lorica/index';
import { SedeTierralta } from '../Components/Sedes/Tierralta';
import { SedeMontelibano } from '../Components/Sedes/Montelibano';
import { CitasWhatsapp } from '../page/Citas-whatsapp';
import { CitasWhatsappLorica } from '../page/Citas-whatsappL/index';
import { PideTuCita } from '../page/PideTuCita';
import { ServiceGinecologiaLo } from './ServicioDetailsLorica/ServiceGinecobstetriciaLO';
import { ServiceCirugiaGeneralLo } from './ServicioDetailsLorica/ServiceCirugiaGeneralLO';
import { ServiceMedicinaInternaLo } from './ServicioDetailsLorica/ServiceMediciinaInternaLO';
import { ServiceOrtopediaTraumatologiaLo } from './ServicioDetailsLorica/ServiceOrtopediaOtraumatologiaLO';
import { ServicePediatriaLo } from './ServicioDetailsLorica/ServicePediatriaLO';






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
                <Route  path='/Servicios' component={Servicios} />
                <Route  path='/ContactUs' component={ContactUs} />
                <Route  path='/Contactanos' component={Contactanos} />
                <Route  path='/PostContact' component={PostContact} />
                <Route  path='/Map' component={Map} />
                <Route  path='/Smonteria/:idmonteria' component={SedeMonteria} />
                <Route  path='/Slorica/:idlorica' component={SedeLorica} />
                <Route  path='/Stierralta/:idtierralta' component={SedeTierralta} />
                <Route  path='/Smontelibano/:idmontelibano' component={SedeMontelibano} />
                <Route  path='/CitasWhMonteria/:idcitamonteria' component={CitasWhatsapp} />
                <Route  path='/CitasWhLorica/:idcitaLorica' component={CitasWhatsappLorica} />
                <Route  path='/PideTuCita' component={PideTuCita} />
                <Route  path='/Servicio-GinecologiaLo/:idGINECOBSTETRICIA' component={ServiceGinecologiaLo} />
                <Route  path='/Servicio-CirugiaGeneralLo/:idCIRUGIAGENERAL' component={ServiceCirugiaGeneralLo} />
                <Route  path='/Servicio-ServiceMedicinaInternaLo/:idMEDICINAINTERNA' component={ServiceMedicinaInternaLo} />
                <Route  path='/Servicio-OrtopediaTraumatologiaLo/:idTRAUMATOLOGIA' component={ServiceOrtopediaTraumatologiaLo} />
                <Route  path='/Servicio-PediatriaLo/:idPEDIATRIA' component={ServicePediatriaLo} />




                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

