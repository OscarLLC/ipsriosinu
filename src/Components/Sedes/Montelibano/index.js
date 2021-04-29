import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeMontelibano } from './styles';
import { CardServices } from '../../CardServices';
import iconServices from '../../../assets/icon-externa.png';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer';
import { HiroMain } from '../../HiroMain';
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import ImageCirugiaGMl from '../../../assets/cirugiaGeneral.jpg';
import ImageGinecoMl from '../../../assets/imag-ginecolo.jpg';
import ImageMedicinaIntMl from '../../../assets/medicenaInterna.jpg';
import ImageTraumaMl from '../../../assets/img-traumatologia.jpg';
import ImagePediatriaMl from '../../../assets/img-pediatria.jpg';




export const SedeMontelibano = () => {
    return(
        <ContentSedeMontelibano>
            <Navbar />
            <Wrapper>
            <HiroMain
                title="SERVICIOS MONTELIBANO"
                ImagesHiroMain="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
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