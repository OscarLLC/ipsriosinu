import emailjs from 'emailjs-com'; 
import React, { useState }  from 'react';
import ModalForm from '../ModalForm'
import { ContainerForm } from './styles';
import { PostContact } from '../PostContact';


export default function ContactUs(){
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

            const [modal, setModal] = useState(false);

            const abrirCerrarModal = () => {
                setModal(!modal)
            }
        
        return(
            <ContainerForm>
            <div className="content-dates">
            <PostContact 
                    title="AGENDA TU CITA MONTERIA"
                    titlecall="LLAMA A NUESTRAS LINEAS"
                    number="314 814 0838 - 304 254 1389" 
                    numbertwo ="322 574 2388 - 304 316 7496" 
                    numberthere="304 316 7497"
                    email="ipsriosinumonteria@gmail.com"
                />
                <PostContact 
                    title="AGENDA TU CITA LORICA"
                    titlecall="LLAMA A NUESTRA LINEA"
                    number="322 582 8294"
                    email="ipsriosinulorica@gmail.com"
                />
                 <PostContact 
                    title="AGENDA TU CITA MONTELIBANO"
                    titlecall="LLAMA A NUESTRA LINEA"
                    number="322 584 2018"
                    email="ipsriosinumontelibano@gmail.com"
                />
                 <PostContact 
                    title="AGENDA TU CITA TIERRALTA"
                    titlecall="LLAMA A NUESTRA LINEA"
                    number="322 584 3237"
                    email="ipsriosinutierralta@gmail.com"
                />
                
            </div>
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
                        <div className="ccontent-button-submit">
                            <button onClick={()=>abrirCerrarModal()} type="submit" className="enviar"value="" >Enviar</button>
                            <div className="content-text-modal">
                            <ModalForm
                                open={modal}
                                onClose={abrirCerrarModal}
                            >
                                <div style={{display: 'flex', 
                                            justifyContent: 'center', 
                                            alignItems: 'center', 
                                            height:'100vh'}}>
                                <div style={
                                    {display: 'flex',
                                     justifyContent: 'center',
                                    alignItems: 'center', 
                                    height: '150px', 
                                    width: '250px', 
                                    position: 'absolute',
                                    backgroundColor: 'white',
                                    borderRadius: '5px'
                                    }}>
                                <h3 style={{color: 'white', 
                                            textAlign: 'center', 
                                            padding: '15px',
                                            color: 'black'
                                            }}>Mensaje Enviado!</h3>
                                    <button style={{position: 'relative', 
                                                    backgroundColor: "#c2c2c2", 
                                                    padding: '10px',
                                                    cursor: 'pointer'
                                                }} onClick={()=>abrirCerrarModal()} >X</button>
                                </div>
                                </div>
                                

                            </ModalForm>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ContainerForm>

        )
    }




    

 