import React from 'react';
import { ContentCardSede } from './styles'



export const CardSede = (props) => {
    return(
        <ContentCardSede>
            <div className="sub-cardsede">
                <div className="text-sede">
                <h1>{props.titleSede}</h1>
                </div>
                <picture>
                <img className="image-sede" src={props.ImageSede} />
                </picture>
            </div>
        </ContentCardSede>
    )
}