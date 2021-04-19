import React from 'react'
import { ContentTitleMain } from './styles'


export const TextMain = (props) => {
    return(
        <ContentTitleMain>
            <h1 className="text_main_hiro">{props.titlemain}</h1>
            <p>{props.description}</p>
        </ContentTitleMain>
    )
}