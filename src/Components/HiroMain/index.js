import React from 'react';
import { ContentHiriMain } from './styles';
import Wobble from 'react-reveal/Wobble';


export const HiroMain = (props) => {
    return(
        <ContentHiriMain>
           <div className="sub-contenthiromain">
                <div className="content-image-hirio">
                <Wobble>
                <div className="title-hiro">
                    <h1 className="text-services">{props.title}</h1>
                </div>
                </Wobble>
                    <img className="image-hiromain" src={props.ImagesHiroMain} />
                </div>
           </div>
        </ContentHiriMain>
    )
}