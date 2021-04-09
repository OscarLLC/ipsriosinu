import React, { Component } from 'react'
import LogoIps from '../../assets/logo-mas.jpeg'
import { Link } from 'react-router-dom'
import { ContentMenu } from './styles'
import { GlobalStyle } from '../GloblaStyle'
import { BsList, BsXSquare } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
 


class Navbar extends Component{
    state = {
        clickend: false,
    }

    handleClick = () => {
        this.setState({clickend: !this.state.clickend})
    }


    render(){
        return(
            <React.Fragment>
                <GlobalStyle />
                <ContentMenu>
                    <nav className="navbarItems subItems.active">
                        <div>
                            <img className="navbarlogo" src={LogoIps} alt="LogoIpsRio" />
                        </div>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className="icon-menu">
                                {this.state.clickend ? <BsXSquare /> : <BsList /> }
                            </i>
                        </div>
                        <ul className={this.state.clickend ? 'subItems active' : 'subItems'}>
                            <div className="content-links">
                                <Link to="/" className="links">Inicio</Link>
                            </div>
                            <div className="content-links">
                                <Link to="/Nosotros" className="links">Nosotros</Link>
                            </div>
                            <div className="content-links">
                                <Link to="/" className="links">Profesionales de la Salud</Link>
                            </div>
                            <div className="content-links">
                                <Link to="/" className="links">Servicios</Link>
                            </div>
                            <div className="content-links">
                                <Link to="/Contactanos" className="links">Contactanos</Link>
                            </div>
                        </ul>
                    </nav>
                </ContentMenu>
            </React.Fragment>
        )
    }

}

export default Navbar;