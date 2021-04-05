import styled from 'styled-components'


export const ContentPost = styled.div`
    width: 40%;
    height: 430px;
    background-color: white;
    text-align: center;
    margin: 55px;
    box-shadow: 0 -1px 8px 0 rgb(0 0 0 / 40%);
    transition: 0.3s;
    border-radius: 10px;
    @media(max-width: 1098px){
        width: 70%;
        height: 430px;
        margin: 55px 10px;
    }
    @media(max-width: 700px){
        width: 95%;
        height: 380px;
        margin: 55px 10px;
    }

    .content-image-main{
        display: flex;
        align-items: center;
        justify-content: center;
        
    };

    .content-description{
        background-color: #007d87;
        display: flex;
        padding: 13px 10px;
    };

    .text-main{
        display: flex;
        align-items: center;
    };

    h1{
        font-size: 27px;
        color: white;
    };

    .logo{
        width: 188px;
        height: 113px;
    };

    .phone{
        border-radius: 12px 12px 14px 12px;
        width:160px;
        @media(max-width: 470px){
            width: 110px;
        }
        @media(max-width: 340px){
            width: 85px;
        }
    };

    .footer{
        padding: 6px 6px 13px 6px;
        color: white;
        background-color: #007d87;
        border-radius: 0px 0px 10px 10px;

    }

`;