import styled from 'styled-components'

export const Wraper = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--darkGray);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 5px 0;
  color: var(--white);
  justify-content: space-around;

  h3{
      margin: 0 auto;
      text-align: center;
  }
  p{
      margin: 0 auto;
      text-align: center;
  }
`

export const Image = styled.img`
   width: 90% cover;
   height: 300px;
   border-radius: 20px;
   margin: 0 0 5px 0;
   
`

