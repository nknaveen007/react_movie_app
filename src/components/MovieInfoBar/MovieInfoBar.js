import styled from 'styled-components';

export const Wraper = styled.div`
   display: flex;
   justify-content: center;
   background-color: var(--darkGray);
`

export const Content = styled.div`
   display: flex;
   width: 100%;
   max-width: var(--maxWidth);
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 10px 0;

  
`

export const Box = styled.div`
   color: var(--white);
   background-color: var(--medGray);
   padding: 0 20px;
   flex: 1;
   text-align: center;
   border-radius: 20px;
   margin:15px 20px;
   font-weight: 900;
   font-size: var(--fontMed);
   min-width: 200px;

   @media (max-width:786px){
    font-size: var(--fontSmall);
   
   }
   
`