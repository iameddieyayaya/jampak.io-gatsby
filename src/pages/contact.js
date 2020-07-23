// Gatsby supports TypeScript natively!
import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import hello from '../images/hello.jpg'


const Page = styled.div`
    height: 100vh;
    display: block;
    text-align: center;
    color: #fff;
    background: #000;
`

const Div = styled.div`
    position: absolute;
    top: 45vh;
    left: 25vw;
    
    a {
      font-weight: 800;
      text-decoration: none;
      color: rgb(254, 143, 221)
    }


  @media (min-width: 768px){
    top: 55vh;
    left: 20vw;
  }

`

const Contact = ({data}) => {


  return (
    <Layout>
      <SEO title="Contact" keywords={['contact', 'email']} />
      <Page>
        <Div>
          <h2>Have Questions?</h2>
          <a href="mailto:thejampak.io@gmail.coms">Email Us!</a>
        </Div>
         <img src={hello} alt='Hello' />
      </Page>
    </Layout>
    ) 
  
}

export default Contact