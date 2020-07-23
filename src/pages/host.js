// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Host = (props) => (
  <Layout>
    <SEO title="Host" />
    <h1>Hi from the sssssssecond page</h1>
    <h1>Hi from the sssssssecond page</h1>
    <h1>Hi from the sssssssecond page</h1>
    <h1>Hi from the sssssssecond page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Host