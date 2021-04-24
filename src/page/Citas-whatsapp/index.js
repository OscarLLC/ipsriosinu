import React from 'react';
import { ContentCitasWhatsapp } from './styles';
import Nabvar  from '../../Components/Navbar';
import FormWhMonteriaC from '../../Components/FormWhatSapp/Monteria';
import { Footer } from '../../Components/Footer'

export const CitasWhatsapp = () => {
    return(
        <ContentCitasWhatsapp>
            <div>
                <Nabvar />
                <FormWhMonteriaC />
                <Footer />
            </div>
        </ContentCitasWhatsapp>
    )
}