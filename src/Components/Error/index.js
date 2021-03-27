import React from 'react';
import { Contenterror } from './styles';
import ImageError from '../../assets/error.svg';
import { Link } from 'react-router-dom';
import { BsHouseFill } from "react-icons/bs";


export const Error = () => {
    return(
        <Contenterror>
            <div className="content-image">
                <img className="imageError" src={ImageError} alt="ImageError" />
            </div>
            <div className="content-link-home">
                <p>Dale click a la casita <Link to="/" className="links-home"><BsHouseFill className="house" /></Link></p>
                
            </div>
        </Contenterror>
    )
}

