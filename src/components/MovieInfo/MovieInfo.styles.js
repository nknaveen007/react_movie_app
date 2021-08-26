import styled from 'styled-components'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config'

export const Wraper = styled.div`
   background: ${({backdrop})=>backdrop?`url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`:'#eee'};
   background-position:100% center;
   background-size: cover;
   padding: 40px 20px;
   
`

export const Content = styled.div`
   display: flex;
   max-width: var(--maxWidth);
   justify-content: center;
   margin: 0 auto;
   height: 100%;
   background-color: rgb(0,0,0,0.7);
   border-radius: 20px;
   padding: 0;
   animation: cont 0.7s ease-in-out 1 ;
  
   @keyframes cont{
       0%{transform:translateX(3000px)}
      100%{transform:translateX(0px)}
   }
  


   @media (max-width:1000px){
    flex-wrap: wrap;
    min-width: fit-content;
   }

   
   
`

export const Text = styled.div`
   max-width: 950px;
   padding: 20px 40px;
   color: var(--white);
   font-size: var(--fontMed);
   animation: textview 1.2s ease-out 1 ;
  
   

   @keyframes textview{
    0% {opacity:0}
    75%{opacity:0}
    100%{opacity:1}
   }

   @media (max-width:768px){
    font-size: var(--fontSmall);
   }

   p{
    font-size: var(--fontMed);

    @media (max-width:768px){
    font-size: var(--fontSmall);
   }
   }

  
  h3{
    font-size: var(--fontBig);

    @media (max-width:768px){
    font-size: var(--fontMed);
    }

  }
   .rat-dir{
       display: flex;
   }

   .rating{
       margin-right: 40px;
      
       h3{
           color:var(--white);
       }
       .vote{
        color: black;
        background-color:var(--white) ;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
       }

       .director{
           align-self: center;
       }
       
   }

  
`