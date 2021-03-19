import styled from 'styled-components'

export const ContentWeIps = styled.nav`
    margin: 20px 0px;
    display: flex;
    @media (max-width:780px){
        display: block;
    }

    .description-weips{
        margin: 35px;
    }

    p{
        margin-top:25px;
    }

    .iamge-weips{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-ips-rio{
        min-width:100%;
        height:420px;
        object-fit: cover;
        @media (max-width:780px){
        width:90%;
        }
    }

`;