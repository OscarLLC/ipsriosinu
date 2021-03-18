import React, { useState } from 'react'
import './styles.css'
import { GlobalStyle } from '../GloblaStyle'
import ImageComp from '../Banner/ImageSlider'
import Image1 from '../../assets/image_01.jpg'
import Image2 from '../../assets/image_02.jpg'
import Image3 from '../../assets/image_03.jpg'
import Image4 from '../../assets/iamge_04.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



function Slider() {
  //create an array for component to showinside the slide
  let sliderArra = [
  <ImageComp  src={Image1} />,
  <ImageComp src={Image2} />,
  <ImageComp src={Image3} />,
  <ImageComp src={Image4} />
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
      <div className="slider">
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
      </div>
    </React.Fragment>
  )
}

export default Slider;