import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/project-preview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
          paddingTop: `50px`,
        }}
      >
        <Image />
      </div>
      <h1
        style={{
          textAlign: `center`,
          paddingTop: `50px`,
        }}
      >
        Hello! My name is Igor Slabykh and I am glad to welcome you on my
        portfolio web site{" "}
      </h1>
    </Layout>
  )
}
