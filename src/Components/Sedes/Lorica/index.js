import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeLorica } from './styles';
import { CardServices } from '../../CardServices';
import iconServices from '../../../assets/icon-externa.png';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer';
import { HiroMain } from '../../HiroMain';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';


export const SedeLorica = () => {
    return(
        <ContentSedeLorica>
            <Navbar />
            <Wrapper>
            <HiroMain
                title="SERVICIOS LORICA"
                ImagesHiroMain="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
             />
             <Jump>
            <div className="content-text-title">
                <p>En nuestra sede contamos los mejores sercios de consulta externa.</p>
            </div>
            </Jump>
            <div className="content-cardservices">
            <Zoom>
            <Link to="/Servicio-CirugiaGeneralLo/ServiceCirugiaGeneral" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA GENERAL"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
            <Zoom>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="GINECOBSTETRICIA"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
             <Zoom>
             {/* <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA GENERAL"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link> */}
             </Zoom>
             <Zoom>
             <Link to="/Servicio-ServiceMedicinaInternaLo/Servicio-MedicinaInternaLo" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA INTERNA"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="PEDIATRÍA"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeLorica>
    )
}