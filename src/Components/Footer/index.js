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
                    <a href="https://www.instagram.com/ips_rio_sinu__/" target="_blank"><AiOutlineInstagram className="redes" /></a>
                </div>
                <div className="sub-redes">
                    <a href="https://twitter.com/ipsriosinu" target="_blank"><AiOutlineTwitter className="redes" /></a>
                </div>
                <div className="sub-redes">
                    <a href="https://twitter.com/ipsriosinu" target="_blank"><AiOutlineWhatsApp className="redes" /></a>
                </div>
                <div className="sub-redes">
                    <a href="https://www.facebook.com/IPS-RIO-SINU-104115241759477" target="_blank"><AiOutlineFacebook className="redes" /></a>
                </div>
            </div>
            <div className="sub-footer">
                <p>© Copyright 2021 – Todos los derechos reservados</p><br />
                <p>CR 7 No 35-43 BARRIO LA CEIBA <br /> MONTERIA-CORDOBA</p><br />
                <p><strong> Telefonos: 314 814 08 38 <br /> Fax: 314 814 08 38</strong></p>
                <p>Correo:ipsriosinu@gmail.com</p>
            </div>
        </ContentFooter>
    )
}