import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Button from './styled/button'
import Email from './styled/email'

import BackgroundImage from 'gatsby-background-image'

const Overlay = styled.div`
    background-color: rgba(88, 79, 79, 56%);
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
  padding-top: 50px;
  text-align: center
`

const H3 = styled.h3`
    color: #fff;
    margin: 0;
    font-weight: 800;
    padding: 2px;

    /* Screen >= Tablets */
    @media (max-width: 768px) {
      font-size: 1.5rem;
  }

    /* 4k Monitors */
    @media (min-width: 1024px) {
      font-size: 2em;
    }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "patrick-tomasso.jpg" }) {
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
                  <H3>Join to the mailing list?</H3>
                  <Email type='email' placeholder='your-dope-email@coolbeans.com' />
                  <br />
                  <Button>Subscribe</Button>
                </Div>
              </Overlay>              
          </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center;
  background-size: cover;
`


export default StyledBackgroundSection