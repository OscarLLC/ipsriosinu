import React from 'react'
import { ContentGineco } from './styles'
import { ModelDetalleServicio } from '../../ModelDetailServices'
import ImageGineco from '../../../assets/compress/cirugiaGeneral-min.jpg'


export const ServiceCirugiaGeneralLo = () => {
    return(
        <ContentGineco>
            <div>
                <ModelDetalleServicio
                titleGineco="CIRUGÍA GENERAL"
                titleWhat="¿Que es la Cirugía General?"
                descriptionWhatItIs="La cirugía general es la especialidad médica de clase quirúrgica que abarca las operaciones del aparato digestivo; 
                incluyendo el tracto gastrointestinal y el sistema hepato-bilio-pancreático, el sistema endocrino; incluyendo las glándulas suprarrenales, 
                tiroides, paratiroides, mama y otras glándulas incluidas en el aparato digestivo."
                advice="Consejos"
                descriptionAdvice="Si tienen turno para el eco transvaginal y el pap el mismo día PRIMERO EL PAP. Repito: PRIMERO EL PAP,
                el examen mamario debe hacerse siempre, el control con mamografía comienza a los 40 años, se suele pedir también eco mamario, 
                la primera mamografía de base se suele pedir a los 35,‏ en pacientes con antecedentes familiares los controles mamarios empiezan antes,
                La forma de la panza no permite inferir de ninguna manera si es nena, varón o si lo va a decidir solita más adelante,
                tomar gaseosas mientras amamantamos no le produce gases al bebé."
                imageDetailService={ImageGineco}
                />
            </div>
        </ContentGineco>
    )
}