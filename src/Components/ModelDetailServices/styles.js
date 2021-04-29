import styled from 'styled-components'


export const ContentDetailService = styled.div`
    position: absolute;
    

    .content-title-gineco{
        margin-top: 70px;
        margin-bottom: 5px;
        position: relative;
        display: flex;
        border-bottom: 1px solid #e4e0e0;
        @media(max-width:1085px){
            margin-top: 140px;
        }
       
    }

    .title-gineco{
        margin-bottom: 5px;
    }

    .content-main-details{
        margin-top: 30px;
        display: flex;
        @media(max-width:1085px){
            margin-top: 40px;
        }
        @media(max-width:875px){
           display: block;
        }
    }

    .content-information{
        width: 60%;
        margin-right: 20px;
        padding-right: 20px;
        @media(max-width:875px){
            width: 100%;
            margin-bottom: 35px;
            margin-right: 0px;
            padding-right: 0px;
        }
    }

    .content-image-detail{
        width: 40%;
        height: 350px;
        display: flex;
        justify-content: center;
        @media(max-width:875px){
           width: 100%
        }
    }

    .title-advice{
        margin: 15px 0px 15px 0px;
    }

    .content-pide-cita{
        height: 57px;
        display: flex;
        align-items: center;
    }

    .link-pide-cita{
        background: #3cb9c5;
        padding: 6px;
        color: white;
        border-radius: 5px;
        
    }

    .link-pide-cita:hover{
        cursor: pointer;
        background-color:#1a8d98;
        
    }


    .imageservice{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`;