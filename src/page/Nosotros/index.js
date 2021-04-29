import React from 'react';
import Navbar from '../../Components/Navbar';
import { WeDescription } from '../../Components/WeDescription';
import { Contentwe } from './styles';
import { Footer } from '../../Components/Footer';
import { HiroMain } from '../../Components/HiroMain';
import ImageNosotros from '../../assets/nosotros.jpg';
import Slide from 'react-reveal/Slide';


export const Nosotros = () => {
    return(
        <Contentwe>
            <Navbar />
            <Slide left>
            <HiroMain 
                title="NOSOTROS"
                ImagesHiroMain={ImageNosotros}
            />
            </Slide>
            <WeDescription />
            <Footer />
        </Contentwe>
    )
}