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
                <Bounce left><p> Cuando invierte en su salud en nuestra Fundación, ayuda 
                    a que usted y miles de personas tengan la mejor tecnología,
                    calidad y servicio, porque reinvertimos todo en cuidar,
                    proteger y mejorar la salud de nuestros pacientes.
                    Shaio, una clínica socialmente responsable,
                    comprometida con el bienestar de las personas.</p></Bounce>
                    <br />
                    <br />
                    <Bounce left> <p>
                    Cuando invierte en su salud en nuestra Fundación, ayuda 
                    a que usted y miles de personas tengan la mejor tecnología,
                    calidad y servicio, porque reinvertimos todo en cuidar,
                    proteger y mejorar la salud de nuestros pacientes.
                    Shaio, una clínica socialmente responsable,
                    comprometida con el bienestar de las personas.</p></Bounce>
                    <br />
                    <br />
                    <Bounce left><p>
                    Cuando invierte en su salud en nuestra Fundación, ayuda 
                    a que usted y miles de personas tengan la mejor tecnología,
                    calidad y servicio, porque reinvertimos todo en cuidar,
                    proteger y mejorar la salud de nuestros pacientes.
                    Shaio, una clínica socialmente responsable,
                    comprometida con el bienestar de las personas.</p></Bounce>
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