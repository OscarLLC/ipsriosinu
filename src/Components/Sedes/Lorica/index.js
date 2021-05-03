import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeLorica } from './styles';
import { CardServices } from '../../CardServices';
import iconServices from '../../../assets/compress/icon-externa-min.png';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer';
import { HiroMain } from '../../HiroMain';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import ImageServiciosG from '../../../assets/compress/serviciosg-min.jpg';
import ImageCirugiaLo from '../../../assets/compress/cirugiaGeneral-min.jpg';
import ImageGiinecoLo from '../../../assets/compress/imag-ginecolo-min.jpg';
import ImageMedicinaIntLo from '../../../assets/compress/medicenaInterna-min.jpg';
import ImageTraumaLo from '../../../assets/compress/img-traumatologia-min.jpg';
import ImagePediatriaLo from '../../../assets/compress/img-pediatria-min.jpg';


export const SedeLorica = () => {
    return(
        <ContentSedeLorica>
            <Navbar />
            <Wrapper>
            <HiroMain
                title="SERVICIOS LORICA"
                ImagesHiroMain={ImageServiciosG}
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
                imagecardservices={ImageCirugiaLo}
                titleservices="CIRUGÍA GENERAL"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
            <Zoom>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices={ImageGiinecoLo}
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
                imagecardservices={ImageMedicinaIntLo}
                titleservices="MEDICINA INTERNA"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices={ImageTraumaLo}
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="SEDE LORICA"
                imageicon={iconServices}
             />
             </Link>
             </Zoom>
             <Zoom>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices={ImagePediatriaLo}
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