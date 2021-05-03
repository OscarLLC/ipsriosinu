import React, { Component } from 'react'
import { ContainerForm } from './styles'
 
class FormWhMonteriaC extends Component{
    nombreMRRef = React.createRef();
    apellidoMRRef = React.createRef();
    celularMRRef = React.createRef();
    mensajeMRRef = React.createRef();
    
    enviarData = (e) => {
        e.preventDefault();
        const dates = {
            nombre: this.nombreMRRef.current.value,
            apellido: this.apellidoMRRef.current.value,
            celular: this.celularMRRef.current.value,
            mensaje: this.mensajeMRRef.current.value,
        }
        console.log(dates)
        window.open(`https://api.whatsapp.com/send?phone=+573223149605&text=Quiero Una Cita Estos Son Mis Datos!%20%0A${dates.nombre}%20${dates.apellido}%20%0A${dates.celular}%20%0A${dates.mensaje}`)
        e.currentTarget.reset()
    }

    render(){
        return(
            <ContainerForm>              
                <div className="content-main-form">
                    <div className="sub-form">
                        <form onSubmit={this.enviarData} className="form">
                            <div className="sub-title-form">
                                <p>AGENDA TU CITA MONTERIA</p>
                            </div>
                            <div className="sud-sub-input-ones">
                                <div className="content-inputs-one">
                                    <label>Nombres: </label><br />
                                    <input ref={this.nombreMRRef} required type="text" className="inputs-one"  type="text" /><br />
                                </div>
                                <div className="content-inputs-one">
                                    <label>Apellidos: </label><br />
                                    <input ref={this.apellidoMRRef} required type="text" className="inputs-one two"  type="text" />
                                </div>
                            </div>
                            <div className="conten-input-phone">
                                <label>Celular: </label><br />
                                <input ref={this.celularMRRef} required type="number" className="input-celular" />
                            </div>
                            <div className="text-tarea">
                                <label>Mensaje: </label><br />
                                <textarea ref={this.mensajeMRRef} required className="campu-description" ></textarea> 
                            </div>
                            <div className="content-button-submit">
                                <button className="enviarCita">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContainerForm>
        )
    }
}

export default FormWhMonteriaC;