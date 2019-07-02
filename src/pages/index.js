import React from "react"
import { Link } from "gatsby"
import Post from "../components/Post/post"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Post>Hi people</Post>
  </Layout>
)

export default IndexPage
