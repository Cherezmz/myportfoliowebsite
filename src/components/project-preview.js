import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, imageData, title, description }) => (
  <div className="project-preview">
    <h2
      style={{
        textAlign: `center`,
      }}
    >
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p
      style={{
        marginLeft: `20px`,
      }}
    >
      {description}
    </p>
    <Link to={`/${slug}/`}>
      <Image
        fluid={imageData}
        alt={title}
        style={{
          maxWidth: `250px`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      />
    </Link>
    <p
      style={{
        marginLeft: `20px`,
      }}
    >
      <Link to={`/${slug}/`}>View this project &rarr; </Link>
    </p>
  </div>
)

export default ProjectPreview
