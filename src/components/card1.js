import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Overlay = styled.div`
    background-color: rgba(0, 79, 79, 56%);
    width: 100vw;
    height: 228px;
    display: block;
    postion: relative;


    /* 4k Monitors*/
    @media (min-width: 2560px) {
      height: 456px;
  }
`

const Div = styled.div`
    padding: 25px 0 0 18%;
    height: 100%;

    /* Screen >= Tablets */
    @media (min-width: 768px) {
      padding: 10px 0 0 17%;
  }

    @media (min-width: 1024px) {
      padding: 10px 0 0 21%;
  }
  
`

const P = styled.p`
    color: #fff;
    margin: 0;
    font-weight: 800;

    /* Screen >= Tablets */
    @media (min-width: 768px) {
      padding: 10px;
      font-size: 2rem;
  }

    /* 4k Monitors */
    @media (min-width: 2560px) {
      padding: 1.5%;
      font-size: 4rem;
    }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "gabriel-gurrola.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
          <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#000`}
        >
              <Overlay>
                  <Div>
                    <P>An open-source</P>
                    <P>web application</P>
                    <P>to support</P>
                    <P>local music.</P>
                  </Div>


              </Overlay>              
          </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  background-repeat: no-repeat;  

  @media (min-width: 768px) {
    background-position: right 45px bottom 20px;
  }
`

export default StyledBackgroundSection