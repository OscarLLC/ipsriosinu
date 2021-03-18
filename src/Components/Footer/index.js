import React from 'react'
import { ContentFooter } from './styles'
import { AiOutlineInstagram,
         AiOutlineTwitter,
         AiOutlineWhatsApp,
         AiOutlineFacebook } from "react-icons/ai";



export const Footer = () => {
    return(
        <ContentFooter>
            <div className="content-redes">
                <div className="sub-redes">
                    <AiOutlineInstagram className="redes" />
                </div>
                <div className="sub-redes">
                    <AiOutlineTwitter className="redes" />
                </div>
                <div className="sub-redes">
                    <AiOutlineWhatsApp className="redes" />
                </div>
                <div className="sub-redes">
                    <AiOutlineFacebook className="redes" />
                </div>
            </div>
            <div className="sub-footer">
                <p>© Copyright 2021 – Todos los derechos reservados</p><br />
                <p>CR 7 No 35-43 BARRIO LA CEIBA MONTERIA-CORDOBA</p><br />
                <p><strong> Telefonos: 314 814 08 38, Fax: 314 814 08 38</strong></p>
                <p>Correo:ipsriosinu@gmail.com</p>
            </div>
        </ContentFooter>
    )
}