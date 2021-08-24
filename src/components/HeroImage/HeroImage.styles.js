import styled from 'styled-components'

export const Wraper = styled.div`
background: linear-gradient(to bottom ,rgb(0,0,0,0)41%,rgb(0,0,0,0.65) 100%),
            url(${({image})=>image}),var(--darkGray);
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            animation: animateimage 2s;
            height: 600px;
            @keyframes animateimage{
                from{
                    opacity: 0;
                }
                to{
                    opacity: 1;
                }
            }

           
          
`

export const Content = styled.div`
      margin: 0 auto;
      padding: 20px;
      max-width: var(--maxWidth);
`

export const Text = styled.div`
     z-index: 100;
     position: absolute;
     bottom: 40px;
     color: var(--white);
     margin-right: 20px;
     max-width: 700px;
     min-height:100px;

     h1{
       font-size: var(--fontSuperBig);
       @media (max-width: 720px){
       font-size: var(--fontBig);
       }
     }

     p{
        font-size: var(--fontMed);
        @media (max-width: 720px){
        font-size: var(--fontSmall);
     }

     @media (max-width:720px){
         max-width: 100%;
     }
     
     }

`
