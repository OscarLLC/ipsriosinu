import React from 'react';
import { ContentCardServices } from './styles'


export const CardServices = (props) => {
    return(
        <ContentCardServices>
            <div className="container-services">
                <div className="image-services">
                    <img className="image-services" src={props.imagecardservices} />
                </div>
                <div className="content-hiroservices">
                    <div className="sub-text-services">
                        <h5>{props.titleservices}</h5>
                        <h5>{props.sede}</h5>
                    </div>
                    <div>
                        <img className="icono" src={props.imageicon} />
                    </div>
                </div>
                <div className="description-services">
                    <p>{props.descriptionservices}</p>
                </div>
            </div>
        </ContentCardServices>
    )
}


