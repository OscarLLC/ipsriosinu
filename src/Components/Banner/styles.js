import styled from 'styled-components'

 export const ContentSlider = styled.section`
  position: relative;
  width: 100%;
  min-height: 350px;
  box-sizing: border-box;
  margin: 0px;
  padding: 0;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  

.slide{
  position: relative;
  min-width: 100%;
  height: 80%;
  transition: 0.5s;
  overflow: hidden;

}

#goLeft{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 10%;
    height: 40%;
    background: none;
    border: none;
    outline: none;
    transition: 0.5s;

}
/* 
#goLeft:hover{
  background-color: rgba(0, 0, 0, 0.356);
} */


#goRight{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 10%;
  height: 40%;
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;
}

/* #goRight:hover{
  background-color: rgba(0, 0, 0, 0.356);
} */

.images-slider{
  width: 100%;
  max-height: 455px ;
  object-fit: cover;
  min-height: auto;
  @media(max-width: 1000px){
    max-height: 340px;
  }
}

.arrows{
  color: white;
  font-size: 20px;
  font-weight: 600;
}

`;