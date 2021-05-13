import React from 'react'
import { ContentWD } from './styles'
import Slide from 'react-reveal/Slide';

export const WeDescription = () => {
    return(
        <ContentWD>
            <Slide left>
            <div className="text-main-descriptionm">
                <p>En IPS RIO SINU, nos comprometemos a prestar servicios de atención
                    especializada con  calidad basados en el mejoramiento continuo, cumpliendo 
                    atributos de seguridad oportunidad, humanismo y una atención satisfactoria.
                </p>
            </div>
            </Slide>
            
            <Slide left>
                <div className="text-main-description">
                <div className="text-main-description-valores">
                    <h2>MISION</h2>
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
                    <h2>VISION</h2>
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
                    <h2>VALORES CORPORATIVOS</h2>
                    <p>RIO SINU IPS Tendrá Como Valores De Su Institución Los Siguientes:</p>
                    <br />
                       <p><strong>COMPROMISO:</strong>Brindar un servicio excelente priorizando las necesidades de los pacientes y usuarios.</p>
                       <p><strong>RESPONSABILIDAD:</strong>brindar y hacer sentir al paciente y usuarios, un servicio de salud seguro.</p>
                       <p><strong>RESPETO:</strong>Trato profesional al interior de la institución es humano y ético para todos los pacientes y usuarios en general.</p>
                       <p><strong>AMOR:</strong>Nuestros profesionales están impulsados por el amor a la salud y la pasión.</p>
                       <p><strong>SOLIDARIDAD:</strong>Nuestros profesionales son solidarios con las condiciones sociales de los pacientes y usuarios</p>
                       <p><strong>EQUIDAD:</strong>Brindamos servicios sin distinción de condición socioeconómica, credo y propiciamos inclusión.</p>
                </div>
                </Slide>

                <Slide right>
                <div className="text-main-description">
                    <h2>PRINCIPIOS COORPORATIVOS</h2>
                       <ul>
                           <li>Liderazgo</li>
                           <li>Enfoque al usuario</li>
                           <li>Humanización del servicio</li>
                           <li>Participación del personal</li>
                           <li>Integridad</li>    
                       </ul>
                </div>
                </Slide>
        </ContentWD>
    )
}