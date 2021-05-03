import React, { Component } from 'react'
import { ContainerFormMonba } from './styles'
 
class FormWhMontelibano extends Component{
    nombreMonba = React.createRef();
    apellidoMonba = React.createRef();
    celularMonba = React.createRef();
    mensajeMonba = React.createRef();
    
    enviarData = (e) => {
        e.preventDefault();
        const dates = {
            nombre: this.nombreMonba.current.value,
            apellido: this.apellidoMonba.current.value,
            celular: this.celularMonba.current.value,
            mensaje: this.mensajeMonba.current.value,
        }
        console.log(dates)
        window.open(`https://api.whatsapp.com/send?phone=+573103177475&text=Quiero Una Cita Estos Son Mis Datos!%20%0A${dates.nombre}%20${dates.apellido}%20%0A${dates.celular}%20%0A${dates.mensaje}`)
        e.currentTarget.reset()
    }

    render(){
        return(
            <ContainerFormMonba>
                    <div className="content-main-form">
                    <div className="sub-form">
                        <form onSubmit={this.enviarData} className="form">
                            <div className="sub-title-form">
                                <p>AGENDA TU CITA MONTELIBANO</p>
                            </div>
                            <div className="sud-sub-input-ones">
                                <div className="content-inputs-one">
                                    <label>Nombres: </label><br />
                                    <input ref={this.nombreMonba} required type="text" className="inputs-one"  type="text" /><br />
                                </div>
                                <div className="content-inputs-one">
                                    <label>Apellidos: </label><br />
                                    <input ref={this.apellidoMonba} required type="text" className="inputs-one two"  type="text" />
                                </div>
                            </div>
                            <div className="conten-input-phone">
                                <label>Celular: </label><br />
                                <input ref={this.celularMonba} required type="number" className="input-celular" />
                            </div>
                            <div className="text-tarea">
                                <label>Mensaje: </label><br />
                                <textarea ref={this.mensajeMonba} required className="campu-description" ></textarea> 
                            </div>
                            <div className="content-button-submit">
                                <button className="enviarCita">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContainerFormMonba>
        )
    }
}

export default FormWhMontelibano;