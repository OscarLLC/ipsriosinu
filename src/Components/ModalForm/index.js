import React, { useState } from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ModalContent } from './styles'

const useStyles=makeStyles((theme) =>({
    modal:{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#c2c2c2",
        borderRadius:"5px",
        display: "flex",
        flexDirection: "column",
        alignitems: "center",
    }
}))

function ModalMaterialUi(props){
    
const styles = useStyles();

const [modal, setModal] = useState(false); 

const abrirCerrarModal = () => {
    setModal(!modal)
}

const body = (
    <div className={styles.modal}>
        <div align="center">
            <h2>Formulario</h2>
            <p>hola que </p>
        </div>

    </div>
)
    
    return(
        <ModalContent
            open={modal}
            onClose={abrirCerrarModal}
        >
           {body}
        </ModalContent>
    )
}

export default Modal;