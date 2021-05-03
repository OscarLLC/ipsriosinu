import React from 'react';
import { ContentPideTuCita } from './styles';
import  Nabvar  from '../../Components/Navbar';
import { HiroMain } from '../../Components/HiroMain';
import ImagePideTuCita from '../../assets/compress/pedir-cita-min.jpg'
import { Wrapper } from '../../Components/Wrapper';
import { TextMain } from '../../Components/TextMain';
import { Link } from 'react-router-dom';
import { PostContact } from '../../Components/PostContact';
import { Footer } from '../../Components/Footer';
import Slide from 'react-reveal/Slide';

export const PideTuCita = () => {
    return(
        <ContentPideTuCita>
            <Nabvar />
            <Slide right>
            <HiroMain 
                title="PIDE TU CITA AQUI"
                ImagesHiroMain={ImagePideTuCita}
            />
            </Slide>
            <div className="content-pide-tu-cita">
                <Wrapper>
               <div className="content-text">
               <TextMain 
                titlemain="AGENDA TU CITA"
                description="En IPS RIO SUNU tu salud es lo primordial, pide tu cita
                o tele consultas, lo puedes hacer a traves de nuetras sedes seleccionando una de ellas." 
                />
               </div>
               </Wrapper>
            </div>
            <div className="content-dates">
            <Link to="CitasWhMonteria/Monteria" className="links-wh">
            <PostContact 
                    title="AGENDA TU CITA MONTERIA"
                    titlecall="LLAMA A NUESTRAS LINEAS"
                    number="314 814 0838 - 304 254 1389" 
                    numbertwo ="322 584 2388 - 304 316 7496" 
                    numberthere="304 316 7497"
                    email="ipsriosinumonteria@gmail.com"
                />
            </Link>
            <Link to="CitasWhLorica/Lorica" className="links-wh">
                <PostContact 
                    title="AGENDA TU CITA LORICA"
                    titlecall="LLAMA A NUESTRA LINEA"
                    number="322 582 8294"
                    email="ipsriosinulorica@gmail.com"
                />
            </Link>
            <Link to="/" className="links-wh">
                 <PostContact 
                    title="AGENDA TU CITA MONTELIBANO"
                    titlecall="LLAMA A NUESTRA LINEA"
                    number="322 584 2018"
                    email="ipsriosinumontelibano@gmail.com"
                />
            </Link>
            <Link to="/" className="links-wh">
                 <PostContact 
                    title="AGENDA TU CITA TIERRALTA"
                    titlecall="LLAMA A NUESTRA LINEA"
                    number="322 584 3237"
                    email="ipsriosinutierralta@gmail.com"
                />
            </Link> 
            </div>
            <Footer />
        </ContentPideTuCita>
    )
}