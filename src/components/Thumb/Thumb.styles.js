import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.3s;
  animation: animation 0.5s;
  height: ${({ clickable }) => clickable ? '300px':'600px'};
  
  
  

  @keyframes animation{
      from{
         opacity: 0;
      }
      to{
         opacity: 1;
      }
  }

  :hover{
      opacity: 0.8;
  }
`