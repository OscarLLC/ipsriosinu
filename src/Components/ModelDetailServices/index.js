import React from 'react';
import { ContentDetailService } from './styles';
import { Wrapper } from '../Wrapper';
import Nabvar from '../Navbar';
import { Footer } from '../Footer'
// import { Link } from '@material-ui/core';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
 

export const ModelDetalleServicio = (props) => {
    return(
        <ContentDetailService>
            <Nabvar />
            <Wrapper>
            <Jump>
            <div className="content-title-gineco">
                <h1 className="title-gineco">{props.titleGineco}</h1>
            </div>
            </Jump>
            <div className="content-main-details">
                <div className="content-information">
                    <Slide left>
                    <div className="content-whatis">
                        <h3 className="title-what-is-it">{props.titleWhat}</h3>
                        <p className="description-what-is-it">{props.descriptionWhatItIs}</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="content-advice">
                        <h3 className="title-advice">{props.advice}</h3>
                        <p className="description-advice">{props.descriptionAdvice}</p>
                        {/* <div className="content-pide-cita">
                            <Link to="/Nosotros" className="link-pide-cita" >Pide Tu Cita</Link>
                        </div> */}
                    </div>
                    </Slide>
                </div>
                <Zoom>
                <div className="content-image-detail">
                    <img className="imageservice" src={props.imageDetailService} alt="imageDetailService" />
                </div>
                </Zoom>
            </div>
            </Wrapper>
           <Footer />
        </ContentDetailService>
    )
}