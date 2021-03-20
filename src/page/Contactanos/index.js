import React from 'react';
import Navbar from '../../Components/Navbar';
import Slider from '../../Components/Banner/Slider';
import { Footer } from '../../Components/Footer';
import ContactUs  from '../../Components/ContactForm';
import { ContentContact } from './styles';

export const Contactanos = () => {
    return(
        <ContentContact>
            <Navbar />
            <Slider />
            <ContactUs />
            <Footer />
        </ContentContact>
    )
}