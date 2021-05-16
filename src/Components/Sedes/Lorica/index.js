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
                ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/serviciosg-min_v0nerd.jpg"
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
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091301/IPS_RIO_SINU/cirugiaGeneral-min_rishha.jpg"
                titleservices="CIRUGÍA GENERAL"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Zoom>
            <Zoom>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091296/IPS_RIO_SINU/imag-ginecolo-min_h22cgd.jpg"
                titleservices="GINECOBSTETRICIA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Zoom>
             <Zoom>  
             <Link to="/Servicio-Urologia/Servicio-Urologia" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091304/IPS_RIO_SINU/urologia-min_eohows.jpg"
                titleservices="UROLOGIA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-ServiceMedicinaInternaLo/Servicio-MedicinaInternaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/medicenaInterna-min_waq4qv.jpg"
                titleservices="MEDICINA INTERNA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091299/IPS_RIO_SINU/img-traumatologia-min_lsfupy.jpg"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />   
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/img-pediatria-min_h7b9yb.jpg"
                titleservices="PEDIATRÍA"
                sede="SEDE LORICA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Zoom>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeLorica>
    )
}