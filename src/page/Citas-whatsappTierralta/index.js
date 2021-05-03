import React from 'react';
import { ContentCitasWhatsappTi } from './styles';
import Nabvar  from '../../Components/Navbar';
import FormWhTierralta from '../../Components/FormWhatSapp/Tierralta';
import { Footer } from '../../Components/Footer'

export const CitasWhatsappTierralta = () => {
    return(
        <ContentCitasWhatsappTi>
            <div>
                <Nabvar />
                <FormWhTierralta />
                <Footer />
            </div>
        </ContentCitasWhatsappTi>
    )
}