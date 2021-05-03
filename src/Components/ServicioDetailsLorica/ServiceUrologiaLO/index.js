import React from 'react'
import { ContentUrologia } from './styles'
import { ModelDetalleServicio } from '../../ModelDetailServices'
import ImageUrologia from '../../../assets/compress/urologia-min.jpg'


export const ServiceUrologiaLO = () => {
    return(
        <ContentUrologia>
            <div>
                <ModelDetalleServicio
                titleGineco="UROLOGIA"
                titleWhat="¿Que es la Urologia?"
                descriptionWhatItIs="La Gineco-obstetricia es la parte de la medicina que se ocupa de la 
                reproduccion humana y de las afecciones génito-mamarias. Por lo tanto la temática está 
                relacionada con el estudio anatómico, fisiológico y patológico del aparato génito-mamario, 
                así como el embarazo, parto, puerperio normal y patológico."
                advice="Consejos"
                descriptionAdvice="Si tienen turno para el eco transvaginal y el pap el mismo día PRIMERO EL PAP. Repito: PRIMERO EL PAP,
                el examen mamario debe hacerse siempre, el control con mamografía comienza a los 40 años, se suele pedir también eco mamario, 
                la primera mamografía de base se suele pedir a los 35,‏ en pacientes con antecedentes familiares los controles mamarios empiezan antes,
                La forma de la panza no permite inferir de ninguna manera si es nena, varón o si lo va a decidir solita más adelante,
                tomar gaseosas mientras amamantamos no le produce gases al bebé."
                imageDetailService={ImageUrologia}
                />
            </div>
        </ContentUrologia>
    )
}