import React from 'react'
import { ContentWeIps } from './styles'
import { Wrapper } from '../Wrapper';
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';


export const WeIps = () => {
    return(
        <Wrapper>
        <ContentWeIps> 
            <div className="description-weips">
                <RubberBand><h2>IPS RIO SINU</h2></RubberBand>
                <Slide left><p>Prestamos el mejor servicio de salud consulta externa especializada 
                    a paciente que requieran nuestro servicio, con la garantía que nuestros usuarios 
                    y acompañantes reciban la mejor y más calidad atención profesional, ofrecida 
                    por el sector.
                    </p></Slide>
                    <br />
                <Slide left><p>Nos comprometemos con la seguridad 
                    de nuestros usuarios a partir de la aplicación de practicas seguras, 
                    barreras y controles, que minimicen La posibilidad de ocurrencia de 
                    incidentes y/o sucesos adversos durante la atención.
                    </p></Slide>
                    <br />
                    <Slide left> <p>
                    Este compromiso nos lleva a la prevención de la ocurrencia de situaciones 
                    que afecten la seguridad del paciente, reducir y de ser posible eliminar la 
                    ocurrencia de eventos adversos para contar con procesos seguros dentro de la 
                    institución, con la participación responsable de los diversos actores 
                    involucrados en el, con el seguimiento y evaluación permanente y proactiva 
                    de los riesgos asociados a la atención en salud, para diseñar e implantar de 
                    manera constante las barreras de seguridad necesarias.
                    </p></Slide>
                    <br />
            </div>
            <Slide right>
            <div className="image-weips">
                <picture>
                <img alt="image-ips-rio" className="image-ips-rio" src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133508/IPS_RIO_SINU/image_ips_rio-min_qlr3kw.png"  />
                </picture>
            </div>
            </Slide>
        </ContentWeIps>
        </Wrapper>
    )
}