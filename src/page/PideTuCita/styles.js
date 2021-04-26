import styled from 'styled-components'


export const ContentPideTuCita = styled.div`

.content-dates{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap:wrap;
        width: 100%;
        margin-top: 25px;
        @media (max-width: 970px){
            width: 100%;
            font-size: 15px;
            padding: 0px 5px;
            margin-top: 0;
            display: block;
        }
    }
    .links-wh{
        width: 40%;
        display: flex;
        justify-content: center;
        text-decoration: none;
        @media(max-width: 970px){
            width: 100%;
            
        }
    }

    p{
        margin: 25px 0px 0px 15px;
    }
`;