import React from 'react';
import { ContentPost } from './styles';
import Roll from 'react-reveal/Roll';


export const PostContact = (props) => {
    return(
        <ContentPost>
            <Roll left>
            <div className="sub-car">
            <div className="content-image-main">
                <img alt="image-logo" src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133509/IPS_RIO_SINU/logo-mas-min_npfz0x.jpg" className="logo" />
            </div>
            <div className="content-description">
                <div className="text-main">
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <img alt="image-person" src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1620133511/IPS_RIO_SINU/person-call-min_uugipv.png" className="phone" />
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
                </div>
                </Roll>
        </ContentPost>
    )
}