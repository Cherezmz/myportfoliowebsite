import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"

const AboutDiv = styled.div`
  max-width: 400px;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
`

const AboutP = styled.p`
  margin-left: 20px;
  text-indent: 20px;
  text-align: justify;
  margin-right: 20px;
  padding-top: 15px;
`

export default () => {
  return (
    <Layout>
      <AboutDiv>
        <Image />
      </AboutDiv>
      <AboutP>
        I am a highly accomplished professional with a record of repeated
        success over sixteen years of legal, management and business
        experience.Companies such as Microsoft, Adobe Systems, Corel, and
        Graphisoft were among my clients and employers.{" "}
      </AboutP>
      <AboutP>
        I recently moved to the US, have begun my career in software development
        from scratch, and graduated from three-month, 500-hour full-time and
        full-stack General Assembly Software Engineering Immersive program.
      </AboutP>

      <AboutP>
        It is quite a fun to write code after being a lawyer for many years. If
        a code works I have a feeling like I win a case in a court. But a code
        works more often, and I love that feeling :)
      </AboutP>
    </Layout>
  )
}
