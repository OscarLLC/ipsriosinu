import React from 'react'
import { ContentWeIps } from './styles'
import ImageIps from '../../assets/image_ips_rio.png'
import { Wrapper } from '../Wrapper'


export const WeIps = () => {
    return(
        <Wrapper>
        <ContentWeIps> 
            <div className="description-weips">
                <h2>IPS RIO SINU</h2>
                <p> Cuando invierte en su salud en nuestra Fundación, ayuda 
                    a que usted y miles de personas tengan la mejor tecnología,
                    calidad y servicio, porque reinvertimos todo en cuidar,
                    proteger y mejorar la salud de nuestros pacientes.
                    Shaio, una clínica socialmente responsable,
                    comprometida con el bienestar de las personas.
                    <br />
                    <br />

                    Cuando invierte en su salud en nuestra Fundación, ayuda 
                    a que usted y miles de personas tengan la mejor tecnología,
                    calidad y servicio, porque reinvertimos todo en cuidar,
                    proteger y mejorar la salud de nuestros pacientes.
                    Shaio, una clínica socialmente responsable,
                    comprometida con el bienestar de las personas.
                    <br />
                    <br />

                    Cuando invierte en su salud en nuestra Fundación, ayuda 
                    a que usted y miles de personas tengan la mejor tecnología,
                    calidad y servicio, porque reinvertimos todo en cuidar,
                    proteger y mejorar la salud de nuestros pacientes.
                    Shaio, una clínica socialmente responsable,
                    comprometida con el bienestar de las personas.
                </p>
            </div>
            <div className="image-weips">
                <img className="image-ips-rio" src={ImageIps} />
            </div>
        </ContentWeIps>
        </Wrapper>
    )
}