import styled from 'styled-components'


export const ContentHiro = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .sub-hiros{
        width: 230px;
        height: 230px;
        padding: 20px;
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #26b4c0;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;
        @media (max-width: 1210px){
            width: 320px;
            height: 222px;
        }
        @media (max-width: 800px){
            width: 90%;
            height: 120px;
            margin: 5px;
        }
    }

    .sub-hiros:hover{
        background-color: #0d757d;
        cursor: pointer;
    }

    h2{
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
    }

`;