import styled from 'styled-components'

export const ContentMenu = styled.nav`

.navbarItems{
    background-color: #26b4c0;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    z-index: 50;
    @media(max-width: 1080px){
        position: relative;
        justify-content: space-between;

    }
};

.navbarlogo{
    width: 140px;
    height: 88px;
    @media(max-width: 1080px){
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(25%, 17%)
    }
};

.subItems{
    ${'' /* display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 75px; */}
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
    @media(max-width: 1080px){
        display: block;
        fle-display: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 120px;
        left:-100%;
        opacity: 1;
        transition: all 0.5s ease;
    }

}

.subItems.active{
    background-color: #26b4c0;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    @media(max-width:1000px){
        padding-top: 75px;
    }
    
}


.links{
    color: white;
    height: 75px;
    padding:20px;
    text-decoration: none;
    cursor: pointer;
    @media(max-width: 1080px){
        text-align: center;
        padding: 15px;
        width: 100%;
        display: table;
    }

}


.links:hover{
    border-bottom: 5px solid white;
    margin-bottom:5px;
}

.menu-icon{
    margin-right: 20px;
        @media(min-width: 1080px){
        display: none;
        position: absolute;
        top: 18px;
        margin-right: 22px;
        transform: translate(-100%, 60%);
        margin-right: 20px;
    }
};

.icon-menu{
    font-size: 35px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
}


`