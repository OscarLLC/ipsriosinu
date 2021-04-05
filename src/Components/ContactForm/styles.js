import styled from 'styled-components';

export const ContainerForm = styled.section`
    background-color: white;
    padding-bottom: 70px;
    
.content-main-form{
    display: flex;
    justify-content: center;
    align-items: center;
}
    .sub-form{
        background-color: #007d87;
        margin-top: 80px;
        width: 60%;
        padding: 15px;
        display: flex;
        border-radius: 5px;
        justify-content: center;
        @media(max-width: 790px){
            width: 90%;
        }

    }

    .form{
        width: 100%;
        padding: 15px;
    }

    .sub-title-form{
        padding: 15px 0;
    }

    .sud-sub-input-ones{
        width: 100%;
        display: flex;
        justify-content: space-between;
        @media(max-width: 790px){
            display: block;
        }
    
    }

    .content-inputs-one{
        width: 45%;
        padding: 15px 0;
        @media(max-width: 790px){
            width: 100%;
        }

    }

    .conten-input-phone{
        padding: 15px 0;
        width: 100%;
    }

    .input-celular{
        width: 100%;
        height: 45px;
        border-radius: 5px;
        border: none;
    }

    .inputs-one{
        width: 100%;
        height: 45px;
        border-radius: 5px;
        border: none;
        padding-left: 5px;
    }

    .text-tarea{
        padding: 15px 0;
        width: 100%;
    }

    .campu-description {
        width: 100%;
        height: 140px;
        border-radius: 5px;
        border: none;
        padding: 5px 0px 0px 5px;
    }

    .content-button-submit{
        width: 110px;
        border-radius: 20px;
        background-color: #00d3b5;
        display: flex;
        justify-content: center; 
        align-items: center;
        @media(max-width: 790px){
            width: 100%;
            
        }

        .content-button-submit:hover{
            background-color: #208475;
        }
    }

    .enviar{
        width: 110px;
        color: white;
        padding: 15px;
        border-radius: 10px;
        background-color:#07a535;   
        display: flex;
        justify-content: center; 
        align-items: center;
        border: none;
        cursor: pointer;
        font-size: 20px;
        @media (max-width: 790px){
            width: 100%;
        }
    }

    .enviar:hover{
        background-color: #0cff52;
    }

    h2{
        color: white;
    }

    label{
        font-size: 20px;
        color: white;
    }

    .text-contact{
        color: #2991D6;
    }

    .content-dates{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        width: 100%;
        margin-top: 25px;
        @media (max-width: 570px){
            
            width: 100%;
            font-size: 15px;
            padding: 15px 5px;
            margin-top: 0;
        }
    }

    h3{
        color: white
    }

    .content-text-modal{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;