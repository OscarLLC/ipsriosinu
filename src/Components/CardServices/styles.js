import styled from 'styled-components'


export const ContentCardServices = styled.div`


.container-services{
    max-width: 350px;
    height: 400px;
    border-radius: 12px;
    opacity: 1;
    margin: 12px;
    box-shadow: 0 1px 3px #00000033;
    border: 1px solid #0000001F;
}

.content-hiroservices{
    display: flex;
    justify-content: space-around;
    height: 95px;
    align-items: center;
    cursor: pointer;
}

.content-hiroservices:hover{
    opacity: 0.5;
   
}

.image-services{
    width:100%;
    height: 300px;
    object-fit: cover;
    border-radius:10px;
}
.image-services:hover{
    opacity: 0.8;
}

.icono{
    width:50px;
    height: 50px;
}
h5{
    cursor: pointer;
    
}

.sub-text-services{
    text-align: center;
}

`;