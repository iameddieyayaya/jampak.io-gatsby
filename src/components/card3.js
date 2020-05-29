import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Overlay = styled.div`
    background-color: rgba(79, 59, 0, 56%);
    width: 100vw;
    height: 228px;
    display: block;

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
        desktop: file(relativePath: { eq: "douglas-bagg.jpg" }) {
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
                    <P>Connect musicians with host</P>
                    <P>who are interested in</P>
                    <P>listing their unique space.</P> 
                  </Div>
              </Overlay>              
          </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  opacity: 0.1;
`


export default StyledBackgroundSection