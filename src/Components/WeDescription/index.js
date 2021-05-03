import React from 'react'
import { ContentWD } from './styles'
import Slide from 'react-reveal/Slide';

export const WeDescription = () => {
    return(
        <ContentWD>
            <Slide left>
            <div className="text-main-descriptionm">
                <p>En IPS RIO SINU, nos comprometemos a prestar servicios de atención
                    especializada con calidad basados en el mejoramiento continuo, cumpliendo 
                    atributos de seguridad oportunidad, humanismo y una atención satisfactoria.
                </p>
            </div>
            </Slide>

            
            <Slide left>
                <div className="text-main-description">
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
            </div>
                </Slide>
                <Slide right>
                <div className="text-main-description">
                    <h2>Vision</h2>
                        <p>
                        El CENTRO DE ESPECIALISTAS RIO SINU será en 2025 reconocido a nival regional 
                        como centro de referencia en consultas médica integrales y multidisciplinarias, 
                        con despliegue institucional a lo largo de la región y con servicios de altos 
                        estándares de calidad, crecimiento integral y en servicios complementarios.
                        </p>
                </div>
                </Slide>

                <Slide right>
                <div className="text-main-description">
                    <h2>Nuestros Valores</h2>
                       <ul>
                           <li>Respeto</li>
                           <li>Trabajo En Equipo</li>
                           <li>Honestidad</li>
                           <li>Puntualidad</li>
                       </ul>
                </div>
                </Slide>
        </ContentWD>
    )
}