import React from 'react';
import { ContentServices } from './styles'
import Navbar from '../../Components/Navbar';
import { HiroMain } from '../../Components/HiroMain';
import { Wrapper } from '../../Components/Wrapper';
import { CardSede } from '../../Components/CardSede';
import  ImageSede from '../../assets/sede.png'
import { Footer } from '../../Components/Footer'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';



export const Servicios = () => {
    return(
        <ContentServices>
               <Navbar />
               <Slide top>
               <HiroMain 
                  title="RED - SERVICIOS"
                  ImagesHiroMain="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
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
                titleSede="Monteria"
                ImageSede={ImageSede} 
                />
               </Link>
               </Slide>
               <Slide left>
               <Link to="Slorica/Lorica" className="links">
                 <CardSede 
                titleSede="LORICA"
                ImageSede={ImageSede} 
                />
                </Link>
                </Slide>
                <Slide left>
               <Link to="Stierralta/Tierralta" className="links">
                 <CardSede 
                titleSede="TIERRALTA"
                ImageSede={ImageSede} 
                />
                </Link>
                </Slide>
                <Slide left>
               <Link to="Smontelibano/Montelibano" className="links">
                 <CardSede 
                titleSede="MONTELIBANO"
                ImageSede={ImageSede} 
                />
                </Link>
                </Slide>
            </div>
             </Wrapper>
             <Footer />
        </ContentServices>
    ) 
}