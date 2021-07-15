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
                ImagesHiroMain="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/serviciosg-min_v0nerd.jpg"
             />
             <LightSpeed right></LightSpeed>
              <div className="content-text-title">
                <p>En nuestra sede contamos los mejores sercios de consulta externa.</p>
            </div>
            <div className="content-cardservices">
                <Bounce>
            <Link to="/Servicio-CirugiaGeneralLo/ServiceCirugiaGeneral" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091301/IPS_RIO_SINU/cirugiaGeneral-min_rishha.jpg"
                titleservices="CIRUGÍA GENERAL"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091296/IPS_RIO_SINU/imag-ginecolo-min_h22cgd.jpg"
                titleservices="GINECOBSTETRICIA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
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
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/medicenaInterna-min_waq4qv.jpg"
                titleservices="MEDICINA INTERNA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091299/IPS_RIO_SINU/img-traumatologia-min_lsfupy.jpg"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091300/IPS_RIO_SINU/img-pediatria-min_h7b9yb.jpg"
                titleservices="PEDIATRÍA"
                sede="TIERRALTA"
                imageicon="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091295/IPS_RIO_SINU/icon-externa-min_szaeu5.png"
             />
             </Link>
             </Bounce>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeTierralta>
    )

}