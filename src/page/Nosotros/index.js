import React from 'react';
import Navbar from '../../Components/Navbar';
import { WeDescription } from '../../Components/WeDescription';
import { Contentwe } from './styles';
import { Footer } from '../../Components/Footer';
import { HiroMain } from '../../Components/HiroMain';
import Slide from 'react-reveal/Slide';


export const Nosotros = () => {
    return(
        <Contentwe>
            <Navbar />
            <Slide left>
            <HiroMain 
                title="NOSOTROS"
                ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620912893/IPS_RIO_SINU/Felices_Enfermeras_Y_M%C3%A9dicos_En_El_Hospital-min_eof7lk.jpg"
            />
            </Slide>
            <WeDescription />
            <Footer />
        </Contentwe>
    )
}