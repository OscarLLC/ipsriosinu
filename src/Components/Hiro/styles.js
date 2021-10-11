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
        /* background-color: #26b4c0; */
        background-color: #ff0080;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;
        text-decoration: none;
        @media (max-width: 1210px){
            width: 300px;
            height: 222px;
        }
        @media (max-width: 800px){
            max-width: 100%;
            height: 120px;
            margin: 5px;
        }
        @media (max-width: 688px){
            width: 450px;
            height: 120px;
            margin: 5px;
        }
        @media (max-width: 490px){
            width: 350px;
            height: 120px;
            margin: 5px;
        }
        @media (max-width: 404px){
            width: 290px;
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