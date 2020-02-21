import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ imageData, title, description, url }) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>
      <Link to={url}>View this project on HitHub </Link>
    </p>
    <p>
      <Link to="/">back to all projects </Link>
    </p>
  </div>
)

export default Project
