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
        }}
      >
        <Image />
      </div>
      <h1>
        Hello! My name is Igor Slabykh and I am glad to welcome you on my
        portfolio web site{" "}
      </h1>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-around`,
          paddingLeft: `5px`,
          paddingRight: `5px`,
        }}
      >
        <Link to="/projectsReview/">About my projects</Link>
        <Link to="/aboutme/">About me</Link>
        <Link to="/contacts/">Contacts</Link>
        <Link to="/resume/">My resume</Link>
      </div>
    </Layout>
  )
}
