import React from 'react';
import { Wrapper } from '../Wrapper';
import { ContentHiro } from './styles';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';



export const Hiro = () => {
    return(
        <Wrapper>
        <ContentHiro>
           <Zoom>
        <Link to="/PideTuCita" className="sub-hiros"><h2>Citas</h2></Link>
        <Link to="/Nosotros" className="sub-hiros"><h2>Nosotros</h2></Link>
        <Link to="/Servicios" className="sub-hiros"><h2>Servicios</h2></Link>
        <Link to="/Contactanos" className="sub-hiros"><h2>Contactanos</h2></Link>
            </Zoom>
        </ContentHiro>
        </Wrapper>

    )
}