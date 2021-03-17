import React, { Component } from 'react'
import LogoIps from '../../assets/logo-ips.jpeg'
import { Link } from 'react-router-dom'
import { ContentMenu } from './styles'
import { GlobalStyle } from '../GloblaStyle'
import { BsList, BsXSquare } from "react-icons/bs";
 


class Navbar extends Component{
    state = {
        clickend: false
    }

    handleClick = () => {
        this.setState({clickend: !this.state.clickend})
    }

    render(){
        return(
            <React.Fragment>
                <GlobalStyle />
                <ContentMenu>
                        <nav className="navbarItems">
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
                                    <Link to="/" className="links">Home</Link>
                                </div>
                                <div className="content-links">
                                    <Link to="/" className="links">Proyects</Link>
                                </div>
                                <div className="content-links">
                                    <Link to="/" className="links">Features</Link>
                                </div>
                                <div className="content-links">
                                    <Link to="/" className="links">Fqa</Link>
                                </div>
                                <div className="content-links">
                                    <Link to="/Form" className="links">Contact</Link>
                                </div>
                            </ul>
                        </nav>
                </ContentMenu>
            </React.Fragment>
        )
    }

}

export default Navbar;