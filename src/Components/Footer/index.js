import React from 'react'
import { ContentFooter } from './styles'
import { AiOutlineInstagram,
         AiOutlineTwitter,
         AiOutlineYoutube,
         AiOutlineFacebook } from "react-icons/ai";
import Fade from 'react-reveal/Fade';




export const Footer = () => {
    return(
        <ContentFooter>
            <Fade bottom>
            <div className="content-redes">
                <div className="sub-redes">
                    <a rel="noreferrer noopener" href="https://www.instagram.com/ips_rio_sinu__/" target="_blank"><AiOutlineInstagram className="redes" /></a>
                </div>
                <div className="sub-redes">
                    <a rel="noreferrer noopener" href="https://twitter.com/ipsriosinu" target="_blank"><AiOutlineTwitter className="redes" /></a>
                </div>
                <div className="sub-redes">
                    <a rel="noreferrer noopener" href="https://www.youtube.com/channel/UC6RA7TytQ5zKNRnI_YGyRBw" target="_blank"><AiOutlineYoutube className="redes" rel="norel" /></a>
                </div>
                <div className="sub-redes">
                    <a rel="noreferrer noopener" href="https://www.facebook.com/IPS-RIO-SINU-104115241759477" target="_blank"><AiOutlineFacebook className="redes" /></a>
                </div>
            </div>
            <div className="sub-footer">
                <p className="text-footer">© Copyright 2021 – Todos los derechos reservados</p><br />
                <p className="text-footer">CR 7 No 35-43 BARRIO LA CEIBA <br /> MONTERIA-CORDOBA</p><br />
                <p className="text-footer"><strong> Telefonos: 314 814 08 38 <br /> Fax: 314 814 08 38</strong></p>
                <p className="text-footer">Correo:ipsriosinu@gmail.com</p>
            </div>
            </Fade>
        </ContentFooter>
    )
}