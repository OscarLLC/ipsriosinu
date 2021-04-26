import React from 'react';
import Navbar from '../../Components/Navbar';
import Slider from '../../Components/Banner/Slider';
import { WeDescription } from '../../Components/WeDescription';
import { Contentwe } from './styles';
import { Footer } from '../../Components/Footer';
import { HiroMain } from '../../Components/HiroMain';
import ImageNosotros from '../../assets/nosotros-ips.jpg'


export const Nosotros = () => {
    return(
        <Contentwe>
            <Navbar />
            <HiroMain 
                title="NOSOTROS"
                ImagesHiroMain={ImageNosotros}
            />
            <WeDescription />
            <Footer />
        </Contentwe>
    )
}