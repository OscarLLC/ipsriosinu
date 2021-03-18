import React from 'react'
import { Wrapper } from '../Wrapper'
import { ContentHiro } from './styles'


export const Hiro = () => {
    return(
        <Wrapper>
        <ContentHiro>
           
            <div className="sub-hiros">
                <h2>Nosotros</h2>
            </div>
            <div className="sub-hiros">
                <h2>Profesionales de la Salud</h2>
            </div>
            <div className="sub-hiros">
                <h2>Servicios</h2>
            </div>
            <div className="sub-hiros">
                <h2>Contactanos</h2>
            </div>
        </ContentHiro>
        </Wrapper>

    )
}