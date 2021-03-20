import React  from 'react'
import { ContainerForm } from './styles'
import emailjs from 'emailjs-com';



 
export default function ContactUs(){
    function sendEmial(e){

        e.preventDefault();
    emailjs.sendForm('gmail', 'template_i7qo8jh', e.target, 'user_gDBkfTieQRfwNi77nZAf6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
    }

    return(
        <ContainerForm>
                <div className="content-main-form">
                    <div className="sub-form">
                        <form onSubmit={sendEmial} className="form">
                            <div className="sub-title-form">
                                <p>Formulario</p>
                            </div>
                            <div className="sud-sub-input-ones">
                                <div className="content-inputs-one">
                                    <label>Nombre: </label><br />
                                    <input required type="text" placeholder="Nombre" className="inputs-one" /><br />
                                </div>
                                <div className="content-inputs-one">
                                    <label>Apellido: </label><br />
                                    <input required type="text" placeholder="Apellido" className="inputs-one two" />
                                </div>
                            </div>
                            <div className="conten-input-phone">
                                <label>Celular: </label><br />
                                <input required type="number" placeholder="322 222 22 22" className="inputs-one" />
                            </div>
                            <div className="conten-input-phone">
                                <label>Email: </label><br />
                                <input required type="email" placeholder="pepito@gmail.com" className="inputs-one two" />
                            </div>
                            <div className="text-tarea">
                                <label>Mensaje: </label><br />
                                <textarea required className="campu-description" ></textarea> 
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
