import React from "react"
import { Link } from "gatsby"
import Posts from "../components/Posts"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts></Posts>
  </Layout>
)

export default IndexPage
