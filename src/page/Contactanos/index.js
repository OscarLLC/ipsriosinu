import React from 'react';
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import ContactUs  from '../../Components/ContactForm';
import { ContentContact } from './styles';
import Map  from '../../Components/Map';
import Credencial from '../../Components/Credencial';
import Zoom from 'react-reveal/Zoom';
import Wobble from 'react-reveal/Wobble';
import { HiroMain } from '../../Components/HiroMain';
import ImageContactanos from '../../assets/contactanos.jpg';


const mapUrl =  `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credencial.mapsKey}`

export const Contactanos = (props) => {
    return(
        <ContentContact>
           <Navbar />
           <HiroMain 
            title="CONTÁCTANOS"
            ImagesHiroMain={ImageContactanos}
           />
            <ContactUs />
            <Wobble>
                <h2 style={{marginLeft: '25px', paddingBottom:'15px'}}>Encuentranos</h2>
            </Wobble>
            <Zoom left>
            <Map 
                googleMapURL= { mapUrl }
                containerElement= {<div style={{height: '400px'}} />}
                mapElement= {<div style={{height: '100%'}} />}
                loadingElement = {<p>Cargando...</p>}
            />
            </Zoom>
            <Footer />
        </ContentContact>
    )
}