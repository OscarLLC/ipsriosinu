import styled from 'styled-components'

 export const ContentFooter = styled.section`
    width: 100%;
    height: 245px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f2f5;
    margin-top: 50px;
    @media(max-width: 1000px){
        display:block;
        text-align: center;
        width: 100%;
        height: 350px;
       
    }

    .sub-footer{
        padding: 0 25px;
       width: 55%;
       @media(max-width: 1000px){
           width:100%;
           text-align: -webkit-center;
       }
      
    }

    .text-footer{
       text-align: center;
       margin: 0;
    }
    .content-redes{
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 1000px){
        text-align: center;
        width: 100%;
        text-align: -webkit-center;
        padding:25px;
    }
        
    }

    .sub-redes{
        margin: 25px;
        background-color: #bcc2d4;
        padding:10px;
        border-radius:50%;

        @media(max-width: 1000px){
            margin: 10px;
            background-color: #bcc2d4;
            padding: 10px;
            border-radius: 50%;
        }
        
        
    }
    .redes{
        color: white;
        font-weight:600;
        font-size: 45px;
        @media (max-width:480px){
            font-size: 35px;
        }
    }

    .sub-redes:hover{
        background-color: #8795bf;
        cursor: pointer;
    }
 `