import React, { Component } from 'react'
import { ContainerFormlorica } from './styles'
 
class FormWhMonteriaL extends Component{
    nombreLRef = React.createRef();
    apellidoLRef = React.createRef();
    celularLRef = React.createRef();
    mensajeLRef = React.createRef();
    
    enviarData = (e) => {
        e.preventDefault();
        const dates = {
            nombre: this.nombreLRef.current.value,
            apellido: this.apellidoLRef.current.value,
            celular: this.celularLRef.current.value,
            mensaje: this.mensajeLRef.current.value,
        }
        console.log(dates)
        window.open(`https://api.whatsapp.com/send?phone=+573225842388&text=Quiero Una Cita Estos Son Mis Datos!%20%0A${dates.nombre}%20${dates.apellido}%20%0A${dates.celular}%20%0A${dates.mensaje}`)
        e.currentTarget.reset()
    }

    render(){
        return(
            <ContainerFormlorica>
                    <div className="content-main-form">
                    <div className="sub-form">
                        <form onSubmit={this.enviarData} className="form">
                            <div className="sub-title-form">
                                <p>AGENDA TU CITA LORICA</p>
                            </div>
                            <div className="sud-sub-input-ones">
                                <div className="content-inputs-one">
                                    <label>Nombres: </label><br />
                                    <input ref={this.nombreLRef} required type="text" className="inputs-one"  type="text" /><br />
                                </div>
                                <div className="content-inputs-one">
                                    <label>Apellidos: </label><br />
                                    <input ref={this.apellidoLRef} required type="text" className="inputs-one two"  type="text" />
                                </div>
                            </div>
                            <div className="conten-input-phone">
                                <label>Celular: </label><br />
                                <input ref={this.celularLRef} required type="number" className="input-celular" />
                            </div>
                            <div className="text-tarea">
                                <label>Mensaje: </label><br />
                                <textarea ref={this.mensajeLRef} required className="campu-description" ></textarea> 
                            </div>
                            <div className="content-button-submit">
                                <button className="enviarCita">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContainerFormlorica>
        )
    }
}

export default FormWhMonteriaL;