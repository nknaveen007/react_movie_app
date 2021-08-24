import styled from 'styled-components'

export const Wraper = styled.div`
   margin: 0 auto;
   padding: 0 20px;
   max-width: var(--maxWidth);
   
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(${({minmax})=>minmax},1fr)) ;
  grid-gap: 2rem;

 
`