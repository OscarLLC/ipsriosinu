import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentSedeTierralta } from './styles';
import { CardServices } from '../../CardServices';
import iconServices from '../../../assets/icon-externa.png';
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
                ImagesHiroMain="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
             />
             <LightSpeed right></LightSpeed>
              <div className="content-text-title">
                <p>En nuestra sede contamos los mejores sercios de consulta externa.</p>
            </div>
            <div className="content-cardservices">
                <Bounce>
            <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA GENERAL"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="GINECOBSTETRICIA"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA GENERAL"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA INTERNA"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link>
             </Bounce>
             <Bounce>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="PEDIATRÍA"
                sede="TIERRALTA"
                imageicon={iconServices}
             />
             </Link>
             </Bounce>
            </div>
            </Wrapper>
            <Footer />
        </ContentSedeTierralta>
    )

}