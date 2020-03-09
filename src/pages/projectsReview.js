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
        const imageData = project.image.childImageSharp.fluid
        const title = project.title
        const description = project.description
        const slug = project.slug

        return (
          <ProjectPreview
            imageData={imageData}
            title={title}
            description={description}
            slug={slug}
          />
        )
      })}

      <SEO title="Home" />
    </Layout>
  )
}
