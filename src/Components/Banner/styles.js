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
  transform: scale(1.08);
  @media(max-width:1080px){
    margin-top:89px;
  }
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
    cursor: pointer;
    @media(max-width: 1080px){
      top: 60%;
    }

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
  cursor: pointer;
  @media(max-width: 1080px){
      top: 60%;
    }
}

/* #goRight:hover{
  background-color: rgba(0, 0, 0, 0.356);
} */

.images-slider{
  width: 100%;
  max-height: 455px ;
  object-fit: cover;
  min-height: auto;
  background-position: bottom right;
  @media(max-width: 1000px){
    max-height: 340px;
  }
}

.arrows{
  color: white;
  font-size: 20px;
  font-weight: 300;
  height:35px;
  width: 35px;
  background-color: #4e4949;
  border-radius: 50%;
}

.arrows:hover{
  background-color: #332f2f;
}

`;