import React from 'react';
import { ContentServices } from './styles'
import Navbar from '../../Components/Navbar';
import { HiroMain } from '../../Components/HiroMain';
import { Wrapper } from '../../Components/Wrapper';
import { CardSede } from '../../Components/CardSede';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


export const Servicios = () => {
    return(
        <ContentServices>
               <Navbar />
               <Slide top>
               <HiroMain 
                  title="RED - SERVICIOS"
                  ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/serviciosg-min_v0nerd.jpg"
               />
            </Slide>
             <Wrapper>
               <Slide right>
             <div className="content_main_services">
                 <p>Prestamos el mejor servicio de salud en consulta externa especializada a pacientes que requieren nuestros servicios, con la garantía que nuestros usuarios y acompañantes reciban la mejor y más cálida atención profesional ofrecida por el sector.</p>
             </div>
             </Slide>
            <div className="content-sedescard">
            <Slide left>
               <Link to="Smonteria/Monteria" className="links">
                <CardSede 
                titleSede="MONTERIA"
                ImageSede="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/sede-min_g7xu63.png" 
                />
               </Link>
               </Slide>
               <Slide left>
               <Link to="Slorica/Lorica" className="links">
                 <CardSede 
                titleSede="LORICA"
                ImageSede="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/sede-min_g7xu63.png"
                />
                </Link>
                </Slide>
                <Slide left>
               <Link to="Stierralta/Tierralta" className="links">
                 <CardSede 
                titleSede="TIERRALTA"
                ImageSede="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/sede-min_g7xu63.png" 
                />
                </Link>
                </Slide>
                <Slide left>
               <Link to="Smontelibano/Montelibano" className="links">
                 <CardSede 
                titleSede="MONTELIBANO"
                ImageSede="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/sede-min_g7xu63.png"
                />
                </Link>
                </Slide>
            </div>
             </Wrapper>
             <Footer />
        </ContentServices>
    ) 
}