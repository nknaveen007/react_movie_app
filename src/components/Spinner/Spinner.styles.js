import styled from 'styled-components'

export const Spinner = styled.div`
   width: 50px;
   height: 50px;
   border: 5px solid var(--lightGray);
   animation: animate 1.5s linear infinite;
   border-right: 5px solid var(--darkGray);
   border-bottom: 5px solid var(--darkGray);
   border-radius: 50%;
   margin: 20px auto;

   @keyframes animate{
       0%{
          transform: rotate(0deg) ;
       }
       100%{
          transform: rotate(360deg);
        }
   }
`