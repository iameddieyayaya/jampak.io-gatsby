import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const Overlay = styled.div`
    background-color: rgba(0, 79, 79, 56%);
    width: 100vw;
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

const UL = styled.ul`
  list-style: none;
  color: #fff;
  margin-bottom: 0;
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
const Trans = styled.div`
    display: flex;
    padding-bottom: 1rem; 

    /* Screen >= Tablets */
    @media (max-width: 768px) {
        .pie {
            display: none;
        }
    
  }
`

const Pie = styled.div`
        width: 100px; 
        height: 100px;
        border-radius: 50%;
        background: #fff;
        background-image: linear-gradient(to right, transparent 50%, #28accc 0);

        &::before {
            content: "";
            display: block;
            margin-left: 50%;
            height: 100%;
            border-radius: 0 100% 100% 0 / 50%;
            background: #28accc;
            transform-origin: left;
            transform: rotate(.1turn);
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
                        <P>Set Your Own Terms</P>
                        <UL>
                            <li>Create campaing</li>
                            <li>Set your own ticket price</li>
                            <li>Negotaite your revenue splits</li>
                        </UL>
                        <Trans>
                            <div>
                                <P>100% Transparency</P>
                                <UL>
                                    <li>Splits are displayed to the public.</li>
                                </UL>
                            </div>
                            <Pie className="pie"></Pie>
                        </Trans>
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


// const UrOwnTerms = () => {

//     return (
//         <div>
//             <h2>Set Your Own Terms</h2>
//             <p>Create shows, set your own price, and revenue splits between the Artist, Host, and Production Team.</p>
        
//         <h2>100% Transparency</h2>
//         <p>Splits are displayed to the public.</p>
//         <Pie className="pie"></Pie>
//         </div>
//     )
// }

// export default UrOwnTerms