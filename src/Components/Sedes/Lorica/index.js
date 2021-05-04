import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeLorica } from './styles';
import { CardServices } from '../../CardServices';
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
                ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133512/IPS_RIO_SINU/serviciosg-min_ih5dng.jpg"
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
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133508/IPS_RIO_SINU/cirugiaGeneral-min_rspd01.jpg"
                titleservices="CIRUGÍA GENERAL"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Zoom>
            <Zoom>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133507/IPS_RIO_SINU/imag-ginecolo-min_s3lykn.jpg"
                titleservices="GINECOBSTETRICIA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-Urologia/Servicio-Urologia" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133518/IPS_RIO_SINU/urologia-min_umgkew.jpg"
                titleservices="UROLOGIA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-ServiceMedicinaInternaLo/Servicio-MedicinaInternaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133510/IPS_RIO_SINU/medicenaInterna-min_f2zvla.jpg"
                titleservices="MEDICINA INTERNA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133509/IPS_RIO_SINU/img-traumatologia-min_ly5nzr.jpg"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133510/IPS_RIO_SINU/img-pediatria-min_gincvy.jpg"
                titleservices="PEDIATRÍA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Zoom>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeLorica>
    )
}