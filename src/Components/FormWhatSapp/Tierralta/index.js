import React, { Component } from 'react'
import { ContainerFormTierralta } from './styles'
 
class FormWhTierralta extends Component{
    nombreTIRef = React.createRef();
    apellidoTIRef = React.createRef();
    celularTIRef = React.createRef();
    mensajeTIRef = React.createRef();
    
    enviarData = (e) => {
        e.preventDefault();
        const dates = {
            nombre: this.nombreTIRef.current.value,
            apellido: this.apellidoTIRef.current.value,
            celular: this.celularTIRef.current.value,
            mensaje: this.mensajeTIRef.current.value,
        }
        console.log(dates)
        window.open(`https://api.whatsapp.com/send?phone=+573226544342&text=Quiero Una Cita Estos Son Mis Datos!%20%0A${dates.nombre}%20${dates.apellido}%20%0A${dates.celular}%20%0A${dates.mensaje}`)
        e.currentTarget.reset()
    }

    render(){
        return(
            <ContainerFormTierralta>              
                <div className="content-main-form">
                    <div className="sub-form">
                        <form onSubmit={this.enviarData} className="form">
                            <div className="sub-title-form">
                                <p>AGENDA TU CITA TIERRALTA</p>
                            </div>
                            <div className="sud-sub-input-ones">
                                <div className="content-inputs-one">
                                    <label>Nombres: </label><br />
                                    <input ref={this.nombreTIRef} required type="text" className="inputs-one"  type="text" /><br />
                                </div>
                                <div className="content-inputs-one">
                                    <label>Apellidos: </label><br />
                                    <input ref={this.apellidoTIRef} required type="text" className="inputs-one two"  type="text" />
                                </div>
                            </div>
                            <div className="conten-input-phone">
                                <label>Celular: </label><br />
                                <input ref={this.celularTIRef} required type="number" className="input-celular" />
                            </div>
                            <div className="text-tarea">
                                <label>Mensaje: </label><br />
                                <textarea ref={this.mensajeTIRef} required className="campu-description" ></textarea> 
                            </div>
                            <div className="content-button-submit">
                                <button className="enviarCita">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContainerFormTierralta>
        )
    }
}

export default FormWhTierralta;