import styled from 'styled-components'

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--medGray);
  height: 70px;
  

`
export const Content = styled.div`
   width: 100%;
   max-width: var(--maxWidth);
    
   @media (max-width:1280px){
        padding: 0 20px;
    }

span{
    color: var(--white);
    font-size: var(--fontMed);

    @media (max-width:768px){
        font-size: var(--fontSmall);
    }
}

`