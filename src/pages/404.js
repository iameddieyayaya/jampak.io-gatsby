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


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Page>
      <div style={{margin: '0 auto', paddingTop: '10rem'}}>
        <h2>NOT FOUND 404</h2>
        <p>You just hit a route that doesn&#39;t exist... #sadness.</p>
      </div>
    </Page>
  </Layout>
)

export default NotFoundPage
