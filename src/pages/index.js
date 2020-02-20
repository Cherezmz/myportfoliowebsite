import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/project-preview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges
  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid

        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
      <SEO title="Home" />

      <h1>
        Hello! My name is Igor Slabykh and I am glad to welcome you on my
        portfolio web site{" "}
      </h1>
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
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
