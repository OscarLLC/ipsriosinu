import React from 'react'
import { ContentWeIps } from './styles'
import ImageIps from '../../assets/image_ips_rio.png'
import { Wrapper } from '../Wrapper';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';


export const WeIps = () => {
    return(
        <Wrapper>
        <ContentWeIps> 
            <div className="description-weips">
                <RubberBand><h2>IPS RIO SINU</h2></RubberBand>
                <Bounce left><p>Nos comprometemos con la seguridad 
                    de nuestros usuarios a partir de la aplicación de practicas seguras, 
                    barreras y controles, que minimicen La posibilidad de ocurrencia de 
                    incidentes y/o sucesos adversos durante la atención.
                    </p></Bounce>
                    <br />
                    <Bounce left> <p>
                    Este compromiso nos lleva a la prevención de la ocurrencia de situaciones 
                    que afecten la seguridad del paciente, reducir y de ser posible eliminar la 
                    ocurrencia de eventos adversos para contar con procesos seguros dentro de la 
                    institución, con la participación responsable de los diversos actores 
                    involucrados en el, con el seguimiento y evaluación permanente y proactiva 
                    de los riesgos asociados a la atención en salud, para diseñar e implantar de 
                    manera constante las barreras de seguridad necesarias.
                    </p></Bounce>
                    <br />
            </div>
            <Fade right>
            <div className="image-weips">
                <img className="image-ips-rio" src={ImageIps} />
            </div>
            </Fade>
        </ContentWeIps>
        </Wrapper>
    )
}