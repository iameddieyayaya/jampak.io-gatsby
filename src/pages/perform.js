// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Perform = (props) => (
  <Layout>
    <SEO title="Perform" />
    <h1>Hi from the seconasdd page</h1>
    <h1>Hi from the seconasdd page</h1>

    <div>FUCK</div>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Perform