import styled from 'styled-components'


export const ContentCardSede = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
   
.sub-cardsede{
    max-width: 398px;
    height: 390px;
    border-radius: 12px;
    opacity: 1;
    margin: 12px;
    box-shadow: 0 1px 3px #00000033;
    border: 1px solid #23b6a5;
    
    @media(max-width: 460px){
        height: 350px;
    }
    @media(max-width: 350px){
        height: 330px;
    }
}

.sub-cardsede:hover{
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
}

.image-sede{
    width: 100%
}

.text-sede{
    display: flex;
    justify-content: center;
    padding: 25px 0 0 0;
    color: #23b6a5;
}

h1{
    position: absolute;
}



`;