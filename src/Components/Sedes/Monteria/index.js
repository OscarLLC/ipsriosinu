import React from 'react';
import Navbar from '../../Navbar'
import { Wrapper } from '../../Wrapper';
import { ContentVenues } from './styles';
import { CardServices } from '../../CardServices';
import iconServices from '../../../assets/icon-externa.png';
import iconMedicinaInterna from '../../../assets/icon-medicina-interna.png';
import iconAnesteciologia from '../../../assets/icon-anesteciologia.png';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer';
import { HiroMain } from '../../HiroMain';
import Wobble from 'react-reveal/Wobble';
import Slide from 'react-reveal/Slide';


export const SedeMonteria = () => {
    return(
        <ContentVenues>
            <Navbar />
            <HiroMain
                title="SERVICIOS MONTERIA"
                ImagesHiroMain="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
             />
            <Wrapper>
            <Wobble>
            <div className="content-text-title">
                <p>En nuestra sede contamos con una amplia red de sercios de consulta externa en la ciudad de monteria.</p>
            </div>
            </Wobble>
            <div className="content-cardservices">
            <Slide left>
            <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="TOMA DE MUESTRAS DE LABORATORIO CLÍNICO"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
            <Slide left>
             <Link to="/Nosotros" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="TERAPIA OCUPACIONAL"
                sede="SEDE MONTERIA"
                imageicon={iconMedicinaInterna}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="TERAPIA RESPIRATORIA"
                sede="SEDE MONTERIA"
                imageicon={iconAnesteciologia}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="FISIOTERAPIA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="FONOAUDIOLOGÍA Y/O TERAPIA DEL LENGUAJE"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ANESTESIA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CARDIOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA GENERAL"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/Sede/Monteria" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA PEDIÁTRICA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="DERMATOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="DOLOR Y CUIDADOS PALIATIVOS - NO ONCOLÓGICO"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ENDOCRINOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="GINECOBSTETRICIA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="HEMATOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="INFECTOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA FAMILIAR"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA FÍSICA Y REHABILITACIÓN"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="MEDICINA INTERNA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NEFROLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NEUROLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
              <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NUTRICIÓN Y DIETÉTICA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ORTOPEDIA Y/O TRAUMATOLOGÍA  "
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="OTORRINOLARINGOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="PEDIATRÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="PSICOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="PSIQUIATRÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="REUMATOLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="UROLOGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="OTRAS CONSULTAS DE ESPECIALIDAD - NO ONCOLÓGICO"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA DE CABEZA Y CUELLO"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA PLÁSTICA Y ESTÉTICA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA VASCULAR"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NEFROLOGÍA PEDIÁTRICA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NEUMOLOGÍA PEDIÁTRICA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NEUROCIRUGÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="NEUROPEDIATRÍA"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="CIRUGÍA MAXILOFACIAL"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ATENCIÓN DOMICILIARIA DE PACIENTE CRÓNICO SIN VENTILADOR"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
             <Slide left>
             <Link to="/" className="links">
             <CardServices
                imagecardservices="https://images.unsplash.com/photo-1605160535972-4827e620991e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                titleservices="ATENCIÓN DOMICILIARIA DE PACIENTE AGUDO"
                sede="SEDE MONTERIA"
                imageicon={iconServices}
             />
             </Link>
             </Slide>
            </div>
            </Wrapper>
            <Footer />
        </ContentVenues>
    )
}