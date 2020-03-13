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
  font-size: 22px;
  font-weight: lighter;
`

const Wrapper = styled.div`
  max-width: 500px;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
`

export default () => {
  return (
    <Layout>
      <SEO title="Home" />

      <WelcomeText>Hello! </WelcomeText>
      <WelcomeText>My name is Igor Slabykh.</WelcomeText>
      <WelcomeText>
        I am glad to welcome you on my portfolio web site.
      </WelcomeText>
      <Wrapper>
        <Image />
      </Wrapper>
    </Layout>
  )
}
