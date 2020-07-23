// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'



const Page = styled.div`
    height: 100vh;
    display: block;
    text-align: center;
    color: #fff;
    background: #000;
`

const Div = styled.div`
    margin: 0 auto;
    padding-top: 10rem;
  `

const WIP = (props) => (
  <Layout>
    <SEO title="Work In Progress" />
    <Page>
      <Div>
          <h3>Hi! This page is under construction</h3>
          <p>Sign up to the mailing list to stay up to date</p>
          <p>And to get access to the beta release.</p>
      </Div>
    </Page>
  </Layout>
)

export default WIP