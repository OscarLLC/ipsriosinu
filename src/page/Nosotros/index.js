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
                ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133513/IPS_RIO_SINU/nosotros-min_lq9fib.jpg"
            />
            </Slide>
            <WeDescription />
            <Footer />
        </Contentwe>
    )
}