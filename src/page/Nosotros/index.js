import React from 'react';
import Navbar from '../../Components/Navbar';
import Slider from '../../Components/Banner/Slider';
import { WeDescription } from '../../Components/WeDescription';
import { Contentwe } from './styles';
import { Footer } from '../../Components/Footer';



export const Nosotros = () => {
    return(
        <Contentwe>
            <Navbar />
            <Slider />
            <WeDescription />
            <Footer />
        </Contentwe>
    )
}