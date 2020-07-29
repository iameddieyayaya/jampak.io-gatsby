import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  padding-top: 20vh;
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  
  /* Laptop Monitors */
  @media (min-width: 1024px) {
    padding-top: 11.5rem;
    font-size: 2.8rem;
    text-align: left;
    margin-left: 3rem;
  }
`;

const Subsection = styled.p`
  font-size: 1rem;
  width: 70vw;
  margin: 0 auto;
  color: #fff;
  margin-bottom: 15px;

  /* Laptop Monitors */
  @media (min-width: 1024px) {
    text-align: left;
    margin-left: 3rem;
    width: 25rem;;

  }
`;

const MainWrapper = styled.div`
  background-color: rgba(0, 0, 56, 46%);
  width: 100vw;
  height: 100vh;
  color: #fff;
  

  /* Laptop Monitors */
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`

const Form = styled.div`
  text-align: center;  

  /* Laptop Monitors */
  @media (min-width: 1024px) {
    margin-left: 3rem;
    text-align: left;
    font-size: 1rem;

  }
`

const Main = ({ form }) => {

  return (
      <MainWrapper>
        <div>
          <Title>Intimate Shows Anywhere</Title>
          <Subsection>
            An application to support local artist.
            Help with creating campaigns for performing, hosting, and curating shows.
            Most importantly <br/> <strong> Let's get you paid!</strong>
          </Subsection>
          <Form>
          {form}
          </Form>
        </div>              
      </MainWrapper>
  ) 
}


export default Main;
