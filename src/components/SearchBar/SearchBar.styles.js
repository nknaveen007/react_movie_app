import styled from 'styled-components'

export const Wraper = styled.div`

 margin: 0;
 background-color: var(--darkGray);
 padding: 20px 0;
`

export const Content = styled.div`
 width: 90%;
 padding: 3px 10px;
 background-color: var(--medGray);
 display: flex;
 justify-content: center;
 margin: 0 auto;
 border-radius: 40px;
 max-width: var(--maxWidth);
 img{
     width: 25px;
     height: 25px;
     margin: auto 5px;
     margin-right: 10px;
 }
 input{
     border-style: none;
     border-radius: 10px;
     width: 100%;
     padding: 8px 10px;
     outline: none;
     background: transparent;
     color: var(--white);
     font-size: var(--fontMed);
 }

`