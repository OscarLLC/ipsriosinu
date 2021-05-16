import React, { useState } from 'react'
import { ContentSlider } from './styles'
import { GlobalStyle } from '../GloblaStyle'
import ImageComp from '../Banner/ImageSlider'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



function Slider() {
  //create an array for component to showinside the slide
  let sliderArra = [
  <ImageComp src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091296/IPS_RIO_SINU/img-1-min_dittbw.jpg"  />,
  <ImageComp src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091296/IPS_RIO_SINU/img-2-min_jbld7a.jpg" />,
  <ImageComp src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091296/IPS_RIO_SINU/img-3-min_ov5ig4.jpg" />,
  <ImageComp src="https://res.cloudinary.com/ips-rio-sinu/image/upload/v1621091296/IPS_RIO_SINU/img-4-min_g5tky8.jpg" />
];
  const [x, setX] = useState(0);
  const goLeft = () => {
    console.log(x)
    x=== 0 ? setX(-100 * (sliderArra.length -1 )) : setX(x + 100)
  }
  const goRight = () => {
    console.log(x)
    x=== -100 * (sliderArra.length -1 ) ? setX(0) : setX(x - 100)
  }

  return(
    <React.Fragment>
      <GlobalStyle />
      <ContentSlider>
        {
          sliderArra.map((item, index)=>{
            return(
              <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                {item}
              </div>
            )
          })}
          <button id="goLeft" onClick={goLeft}><FaArrowLeft className="arrows" /></button>
          <button id="goRight" onClick={goRight}><FaArrowRight className="arrows" /></button>
      </ContentSlider>
    </React.Fragment>
  )
}

export default Slider;