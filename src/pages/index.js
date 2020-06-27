import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from '../components/main'
import Card1 from '../components/card1'
import Card2 from '../components/card2'
import Card3 from '../components/card3'
import Card4 from '../components/card4'
import Card5 from '../components/card5'
import Card6 from '../components/card6'
import UrOwnTerms from '../components/urOwnTerms'
import EmailForm from '../components/emailForm'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main form={<EmailForm />}/>
    <Card1/>
    <Card2/>
    <UrOwnTerms />
    <Card3/>
    <Card4/>
    <Card5/>
    <Card6/>
  </Layout>
)

export default IndexPage
 