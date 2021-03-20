import emailjs from 'emailjs-com'; 
import React  from 'react'
import { ContainerForm } from './styles';



export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_yepwrco', 'template_sfdsfzc', e.target, 'user_gDBkfTieQRfwNi77nZAf6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
        <ContainerForm>
                <div className="content-main-form">
                    <div className="sub-form">
                        <form onSubmit={sendEmail} className="form">
                            <div className="sub-title-form">
                                <h2>Formulario</h2>
                            </div>
                            <div className="sud-sub-input-ones">
                                <div className="content-inputs-one">
                                    <label>Nombre: </label><br />
                                    <input required type="text" placeholder="Nombre" className="inputs-one" name="from_name" /><br />
                                </div>
                                <div className="content-inputs-one">
                                    <label>Apellido: </label><br />
                                    <input required type="text" placeholder="Apellido" className="inputs-one two" name="from_lastName" />
                                </div>
                            </div>
                            <div className="conten-input-phone">
                                <label>Celular: </label><br />
                                <input required type="number" placeholder="322 222 22 22" className="inputs-one" name="from_phone" />
                            </div>
                            <div className="conten-input-phone">
                                <label>Email: </label><br />
                                <input required type="email" placeholder="pepito@gmail.com" className="inputs-one two" name="from_email" />
                            </div>
                            <div className="text-tarea">
                                <label>Mensaje: </label><br />
                                <textarea required className="campu-description" name="message" ></textarea> 
                            </div>
                            <div className="content-button-submit">
                                <input type="submit" className="enviar"value="Enviar" ></input>
                            </div>
                        </form>
                    </div>
                </div>
        </ContainerForm>
    )
}
