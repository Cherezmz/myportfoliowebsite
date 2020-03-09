import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const ProjectDiv = styled.div`
  margin-left: 80px;
`
// to ensure that projectDib changes smth

const ProjectH1 = styled.h1`
  text-align: center;
`
const ImgWrapper = styled.div`
  max-width: 40%;
  margin-left: auto;
  margin-right: auto;
`

const ProjectP = styled.p`
  padding-top: 20px;
`
const Project = ({ imageData, title, description, url }) => (
  <ProjectDiv>
    <ProjectH1>{title}</ProjectH1>
    <ImgWrapper>
      <Image fluid={imageData} alt={title} />
    </ImgWrapper>
    <ProjectP>{description}</ProjectP>

    <ProjectP>
      <a href={url}>View the code of this project on HitHub </a>
    </ProjectP>

    <ProjectP>
      <Link to="/projectsReview/">Back to all projects </Link>
    </ProjectP>
  </ProjectDiv>
)

export default Project
