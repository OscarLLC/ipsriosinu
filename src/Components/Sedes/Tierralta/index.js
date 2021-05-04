import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeTierralta } from './styles';
import { CardServices } from '../../CardServices';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer';
import { HiroMain } from '../../HiroMain';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';



export const SedeTierralta = () => {
    return(
        <ContentSedeTierralta>
            <Navbar />
            <Wrapper>
            <HiroMain
                title="SERVICIOS TIERRALTA"
                ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133512/IPS_RIO_SINU/serviciosg-min_ih5dng.jpg"
             />
             <LightSpeed right></LightSpeed>
              <div className="content-text-title">
                <p>En nuestra sede contamos los mejores sercios de consulta externa.</p>
            </div>
            <div className="content-cardservices">
                <Bounce>
            <Link to="/Servicio-CirugiaGeneralLo/ServiceCirugiaGeneral" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133508/IPS_RIO_SINU/cirugiaGeneral-min_rspd01.jpg"
                titleservices="CIRUGÍA GENERAL"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133507/IPS_RIO_SINU/imag-ginecolo-min_s3lykn.jpg"
                titleservices="GINECOBSTETRICIA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             {/* <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA GENERAL"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link> */}
             </Bounce>
             <Bounce>
             <Link to="/Servicio-ServiceMedicinaInternaLo/Servicio-MedicinaInternaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133510/IPS_RIO_SINU/medicenaInterna-min_f2zvla.jpg"
                titleservices="MEDICINA INTERNA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133509/IPS_RIO_SINU/img-traumatologia-min_ly5nzr.jpg"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133510/IPS_RIO_SINU/img-pediatria-min_gincvy.jpg"
                titleservices="PEDIATRÍA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133505/IPS_RIO_SINU/icon-externa-min_dvxfme.png"
             />
             </Link>
             </Bounce>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeTierralta>
    )

}