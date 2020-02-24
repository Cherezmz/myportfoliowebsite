import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ imageData, title, description, url }) => (
  <div
    className="project"
    style={{
      marginLeft: `20px`,
    }}
  >
    <h1
      style={{
        textAlign: `center`,
      }}
    >
      {title}
    </h1>
    <Image
      fluid={imageData}
      alt={title}
      style={{
        maxWidth: `40%`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    />

    <p
      style={{
        paddingTop: `20px`,
      }}
    >
      {description}
    </p>

    <p>
      <a href={url}>View the code of this project on HitHub </a>
    </p>

    <p>
      <Link to="/projectsReview/">Back to all projects </Link>
    </p>
  </div>
)

export default Project
