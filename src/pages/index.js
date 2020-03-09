import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/project-preview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const WelcomeText = styled.h1`
  text-align: center;
  padding: 70px 20px;
`

const Wrapper = styled.dev`
  max-width: 300px;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
`

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Image />
      </Wrapper>
      <WelcomeText>
        Hello! My name is Igor Slabykh and I am glad to welcome you on my
        portfolio web site{" "}
      </WelcomeText>
    </Layout>
  )
}
