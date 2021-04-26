import React from 'react';
import { Wrapper } from '../Wrapper';
import { ContentHiro } from './styles';
import Zoom from 'react-reveal/Zoom';




export const Hiro = () => {
    return(
        <Wrapper>
        <ContentHiro>
           <Zoom>
            <div className="sub-hiros">
                <h2>Galeria</h2>
            </div>
            <div className="sub-hiros">
                <h2>Nosotros</h2>
            </div>
            <div className="sub-hiros">
                <h2>Servicios</h2>
            </div>
            <div className="sub-hiros">
                <h2>Contactanos</h2>
            </div>
            </Zoom>
        </ContentHiro>
        </Wrapper>

    )
}