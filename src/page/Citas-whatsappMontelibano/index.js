import React from 'react';
import { ContentCitasWhatsappBano } from './styles';
import Nabvar  from '../../Components/Navbar';
import FormWhMontelibano from '../../Components/FormWhatSapp/Montelibano';
import { Footer } from '../../Components/Footer'

export const CitasWhatsappMontelibano = () => {
    return(
        <ContentCitasWhatsappBano>
            <div>
                <Nabvar />
                <FormWhMontelibano />
                <Footer />
            </div>
        </ContentCitasWhatsappBano>
    )
}