// Gatsby supports TypeScript natively!
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MainWrapper = styled.div`
background-color: rgba(134, 60, 38, 26%);
width: 100vw;
height: 100vh;
color: #fff;
text-align: center;
`
const Div = styled.div`
  position: relative;
  top: 60vh;

`

const PBox = styled.div`
  text-align: left;
  padding: 1rem;



  @media (min-width: 768px){
    width: 450px;
    margin: 0 auto;
  }


`


const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "listento.jpeg" }) {
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
              <SEO title="How It Works" />
              <MainWrapper>
                <Div>
                  <h2>How It Works</h2>
                  <PBox>
                    <p>Musicians or Host will be able to create shows.<br />
                    Look for other musicians, find a places to play.<br />
                    Negotiate ticket prices, and revenue splits.<br />
                    Once all terms are agreed upon.<br />
                    Promote and sell tickets.<br />
                    Have a successful show.<br />
                    Rinse and repeat.</p>
                  </PBox>
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