import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
// import Button from './styled/button'
// import Email from './styled/email'
// import addToMailchimp from 'gatsby-plugin-mailchimp'

const Title = styled.h1`
  padding-top: 8rem;
  font-size: 1.5em;
  text-align: center;
  color: #fff;

  /* Laptop Monitors */
  @media (min-width: 1024px) {
    font-size: 4rem;
  }

`;

const Subtitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
`;



const MainWrapper = styled.div`
  background-color: rgba(0, 0, 56, 46%);
  width: 100vw;
  height: 100vh;
  color: #fff;
  text-align: center;

  /* Laptop Monitors */
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`

const BackgroundSection = ({ className, form }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "aure-pereira.jpg" }) {
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
            <MainWrapper>
              <div>
                <Title>Intimate Shows Anywhere</Title>
                <Subtitle>Host</Subtitle>
                <Subtitle>Book</Subtitle>
                <Subtitle>Build A Team</Subtitle>
                <Subtitle>Remix & Collab</Subtitle>
                <Subtitle>Find Up & Coming Artist</Subtitle>
                {form}
              </div>              
            </MainWrapper>
          </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  @media (min-width: 1024px) {
      background-position: center;
      background-size: cover;

  }
`


export default StyledBackgroundSection