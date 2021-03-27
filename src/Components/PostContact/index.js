import React from 'react';
import Logo from '../../assets/logo-mas.jpeg';
import Phone from '../../assets/phone.jpeg';
import { ContentPost } from './styles'



export const PostContact = (props) => {
    return(
        <ContentPost>
            <div className="content-image-main">
                <img src={Logo} className="logo" />
            </div>
            <div className="content-description">
                <div className="text-main">
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <img src={Phone} className="phone" />
                </div>
            </div>
                <div className="footer">
                    <h3>{props.titlecall} <br />
                        <p>
                            {props.number} <br />
                            {props.numbertwo} <br />
                            {props.numberthere} <br />
                            CORREO: <br />{props.email}
                        </p>
                    </h3>
                </div>
            
        </ContentPost>
    )
}