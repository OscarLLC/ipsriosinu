import styled from 'styled-components'


export const ContentHiriMain = styled.div`
   width:100%;
   padding: 0px 0px 60px 0px;
   @media(max-width:1083px){
    padding: 90px 0px 60px 0px;
   }
 

   .sub-contenthiromain {
       display: flex;
       justify-content: center;
       width: 100%;
   }

   .title-hiro{
       width: 100%;
       height: 350px;
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
   }

   .text-services{
    font-size: 40px;
    z-index: 10;
    color: white;
    margin-left: 625px;
    @media(max-width:1000px){
        font-size: 35px;
        margin-left: 0px;
        margin-top: -195px;
    }
   }


   .content-image-hirio{
       width:90%;
       display: flex; 
       justify-content: center; 
       box-shadow: 22px 32px 9px 0px rgb(0 0 0 / 20%);
       transition: 0.3s;
       border-radius: 0px 0px 55px 55px;
       @media(max-width: 700px){
            width: 90%;
            box-shadow: 12px 32px 9px 0px rgb(0 0 0 / 20%);
       }
   }

   .image-hiromain{
       width: 100%;
       height: 350px;
       object-fit: cover;
       border-radius: 0px 0px 55px 55px;
   }


`;