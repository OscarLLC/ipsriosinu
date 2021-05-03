import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeMontelibano } from './styles';
import { CardServices } from '../../CardServices';
import iconServices from '../../../assets/compress/icon-externa-min.png';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer';
import { HiroMain } from '../../HiroMain';
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import ImageServiciosMon from '../../../assets/compress/serviciosg-min.jpg';
import ImageCirugiaGMl from '../../../assets/compress/cirugiaGeneral-min.jpg';
import ImageGinecoMl from '../../../assets/compress/imag-ginecolo-min.jpg';
import ImageMedicinaIntMl from '../../../assets/compress/medicenaInterna-min.jpg';
import ImageTraumaMl from '../../../assets/compress/img-traumatologia-min.jpg';
import ImagePediatriaMl from '../../../assets/compress/img-pediatria-min.jpg';




export const SedeMontelibano = () => {
    return(
        <ContentSedeMontelibano>
            <Navbar />
            <Wrapper>
            <HiroMain
                title="SERVICIOS MONTELIBANO"
                ImagesHiroMain={ImageServiciosMon}
             />
             <Tada>
              <div className="content-text-title">
                <p>En nuestra sede contamos los mejores sercios de consulta externa.</p>
            </div>
            </Tada>
            <div className="content-cardservices">
            <Slide right>
            <Link to="/Servicio-CirugiaGeneralLo/ServiceCirugiaGeneral" className="links">
             <CardServices
                imagecardservices={ImageCirugiaGMl}
                titleservices="CIRUGÍA GENERAL"
                sede="SEDE MONTELIBANO"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
            <Slide right>
             <Link to="/Servicio-GinecologiaLo/ServiceGinecologia" className="links">
             <CardServices
                imagecardservices={ImageGinecoMl}
                titleservices="GINECOBSTETRICIA"
                sede="SEDE MONTELIBANO"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             
             {/* <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA GENERAL"
                sede="SEDE MONTELIBANO"
                imageicon={iconServices}
             />
             </Link> */}
             
             <Slide right>
             <Link to="/Servicio-ServiceMedicinaInternaLo/Servicio-MedicinaInternaLo" className="links">
             <CardServices
                imagecardservices={ImageMedicinaIntMl}
                titleservices="MEDICINA INTERNA"
                sede="SEDE MONTELIBANO"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide right>
             <Link to="/Servicio-OrtopediaTraumatologiaLo/Servicio-OrtopediaTraumatologiaLo" className="links">
             <CardServices
                imagecardservices={ImageTraumaMl}
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="SEDE MONTELIBANO"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide right>
             <Link to="/Servicio-PediatriaLo/Pediatria" className="links">
             <CardServices
                imagecardservices={ImagePediatriaMl}
                titleservices="PEDIATRÍA"
                sede="SEDE MONTELIBANO"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeMontelibano>
    )

}