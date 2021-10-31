import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero/>
        <Services/>
        <Jobs/>
      </Layout>
    </>
  )
}

export default IndexPage
