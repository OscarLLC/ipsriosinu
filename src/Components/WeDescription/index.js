import React from 'react'
import { ContentWD } from './styles'

export const WeDescription = () => {
    return(
        <ContentWD>
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
            <div className="text-main-valores">
                <div className="text-main-description-valores">
                    <h2>Mision</h2>
                        <p>
                        Prestar servicios profesionales de intermediación
                        por medio de una empresa digital, entre personas 
                        naturales o jurídicas y abogados expertos en las 
                        diferentes ramas del derecho, de manera responsable, 
                        honesta, eficiente con enfoque de servicio al cliente
                        con el apoyo de un equipo humano calificado y tecnología
                        adecuada.
                        </p>
                </div>
                <div className="text-main-description">
                    <h2>Vision</h2>
                        <p>
                        Prestar servicios profesionales de intermediación
                        por medio de una empresa digital, entre personas 
                        naturales o jurídicas y abogados expertos en las 
                        diferentes ramas del derecho, de manera responsable, 
                        honesta, eficiente con enfoque de servicio al cliente
                        con el apoyo de un equipo humano calificado y tecnología
                        adecuada.
                        </p>
                </div>
                <div className="text-main-description">
                    <h2>Nuestros Valores</h2>
                       <ul>
                           <li>Respeto</li>
                           <li>Trabajo En Equipo</li>
                           <li>Honestidad</li>
                           <li>Puntualidad</li>
                       </ul>
                </div>
            </div>
        </ContentWD>
    )
}