import React from 'react'
import { ContentWD } from './styles'
import Bounce from 'react-reveal/Bounce';

export const WeDescription = () => {
    return(
        <ContentWD>
            <Bounce top>
            <div className="text-main-description">
                <p>Esta empresa surge en 2016 como un proyecto
                    tecnológico que desarrollara la creciente
                    demanda de servicios jurídicos utilizando
                    medios digitales de manera novedosa y económicamente 
                    viable. Finalmente en 2017 se establece la marca y
                    la mayoría de convenios requeridos además de la
                    proyección financiera para lanzar la plataforma 
                    al mercado.
                </p>
            </div>
            </Bounce>
            <div className="text-main-valores">
                <Bounce left>
                <div className="text-main-description-valores">
                    <h2>Mision</h2>
                        <p>
                        En <strong>CENTRO DE ESPECIALISTAS RIO SINU</strong>, brindamos servicios
                        de consultas médicas integrales y multidisciplinarias con 
                        atención preferencial, a través de un equipo humano capacitado 
                        y especialistas expertos, calidad en el servicio, valores y vocación 
                        humana, para la satisfacción de nuestros usuarios, mejoramiento de su 
                        condición de salud y calidad de vida tanto de ellos, como de sus familias.
                        </p>
                </div>
                </Bounce>
                <Bounce right>
                <div className="text-main-description">
                    <h2>Vision</h2>
                        <p>
                        El CENTRO DE ESPECIALISTAS RIO SINU será en 2025 reconocido a nival regional 
                        como centro de referencia en consultas médica integrales y multidisciplinarias, 
                        con despliegue institucional a lo largo de la región y con servicios de altos 
                        estándares de calidad, crecimiento integral y en servicios complementarios.
                        </p>
                </div>
                </Bounce>
                <Bounce right>
                <div className="text-main-description">
                    <h2>Nuestros Valores</h2>
                       <ul>
                           <li>Respeto</li>
                           <li>Trabajo En Equipo</li>
                           <li>Honestidad</li>
                           <li>Puntualidad</li>
                       </ul>
                </div>
                </Bounce>
            </div>
        </ContentWD>
    )
}