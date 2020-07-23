// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import SEO from "../components/seo"
import styled from 'styled-components'
import venmo from '../images/venmo.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'

const MainWrapper = styled.div`
    background-color: rgba(248, 160, 183, 46%);
    width: 100vw;
    height: 100vh;
    color: #fff;
    text-align: center;
    
`

const Div = styled.div`
  position: relative;
  top: 15vh;
  left: 10vh;

  @media (min-width: 768px){
    // top: 15vh;
    left: 41vh;
  }
  
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "girldown.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
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
            <Layout>
              <SEO title="Donate" keywords={['opensource', 'application', 'contribute', 'donate', 'venmo']} />
              <MainWrapper>
                  <Div>
                    <h1>Contribute</h1>
                    <div>
                      <div>
                        <a href="https://venmo.com/Eduardo-Gomez-27" alt="venmo" target="_blank" rel="noreferrer" >
                           <img width='128px' src={venmo} alt="venmo"></img>
                        </a>
                      </div>
                      <div>
                        <a href='https://github.com/iameddieyayaya/jampak.io' target="_blank" rel="noreferrer">               
                          <img src={github} alt="Github Repo" style={{filter: 'invert(1)'}}></img>
                        </a>
                      </div>
                      <div>
                        <div>
                          <a className="twitter-share-button"
                            href="https://twitter.com/intent/tweet?text=Friends%20check%20out%20this%20app!&url=http://jampak.io/&hashtags=jampak,singersongwriter,livemusic" target="_blank" rel="noreferrer">
                              <img width='128px' src={twitter} alt="twitter"></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Div>
              </MainWrapper>
            </Layout>
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