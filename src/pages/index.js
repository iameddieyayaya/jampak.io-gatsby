import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from '../components/main'
import Card1 from '../components/card1'
import Card2 from '../components/card2'
import Card3 from '../components/card3'
import Card4 from '../components/card4'
import Card5 from '../components/card5'
import Card6 from '../components/card6'
import UrOwnTerms from '../components/urOwnTerms'
import EmailForm from '../components/emailForm'

import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import styled from 'styled-components'


const StyledBackgroundSection = styled(BackgroundImage)`
  // width: 100%; 
  // height: 100vh;

  /* Laptop Monitors */
  @media (min-width: 1024px) {
     background-size: cover;
  }
`


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />


    <StyledBackgroundSection 
      fluid={props.data.indexImage.childImageSharp.fluid}
      fadeIn
    >

    <Main form={<EmailForm />}/>

    </StyledBackgroundSection>
    
    {/* <Card2/> */}
    {/* <UrOwnTerms />
    <Card3/>
    <Card4/>
    <Card5/>
    <Card6/> */}
  </Layout>
)

export default IndexPage
 
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "aure-pereira.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3813, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;