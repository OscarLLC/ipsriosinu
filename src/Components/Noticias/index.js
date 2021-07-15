import React, { Component } from 'react'
import { ContentNoticias } from './styles'


class Noticias extends Component{
    render(){
        return(
            <ContentNoticias>
                <div className="card-content-noticias">
                    <div className="title-main">
                        <h1>Noticias</h1>
                    </div>
                    <p>Hola desde Noticias</p>
                    <div>
                        {/* <img src={} alt="Image-noticia" /> */}
                        <span></span>
                    </div>
                    <div>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>Leer Mas</p>
                    </div>
                </div>
               
            </ContentNoticias>
        )
    }
}

export default Noticias;