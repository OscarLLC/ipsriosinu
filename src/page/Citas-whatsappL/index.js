import React from 'react';
import { ContentCitasWhatsappLs } from './styles';
import Nabvar  from '../../Components/Navbar';
import FormWhMonteriaL from '../../Components/FormWhatSapp/Lorica';
import { Footer } from '../../Components/Footer'

export const CitasWhatsappLorica = () => {
    return(
        <ContentCitasWhatsappLs>
            <div>
                <Nabvar />
                <FormWhMonteriaL />
                <Footer />
            </div>
        </ContentCitasWhatsappLs>
    )
}