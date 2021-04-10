import styled from 'styled-components'


export const ContentWD = styled.div`
    margin: 45px 90px;
    @media(max-width: 680px){
        margin: 45px 35px;
    }

    .text-main-description{
        margin: 35px 0px;
        box-shadow: 0 25px 25px 0 rgba(0,0,0,0.3);
        transition: 0.3s;
        width: 100%;
        padding: 15px;
    }

    .text-main-description{
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2);
    }

    h2{
        margin: 15px 0px; 
    }

    ul{
        list-style: disc outside;
    }

    li{
        margin: 15px 15px 15px 35px;
    }



`;