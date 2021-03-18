import React from 'react'
import { WrapperMain } from './styles'

export const Wrapper = (props) => {
    return(
        <WrapperMain>
            {props.children}
        </WrapperMain>
    )
}