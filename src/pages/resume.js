import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import CVImage from "../components/cv"

const ResumeP = styled.p`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5rem;
  text-align: center;
`

const Wrapper = styled.div`
  text-align: center;
`
const ResumeA = styled.a`
  padding-top: 0px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  font-weight: bold;
`

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ResumeP>
        If you want to download my resume in PDF format, please click the link:{" "}
        {data.allFile.edges.map((file, index) => {
          return (
            <ResumeA href={file.node.publicURL} download>
              {file.node.name}
            </ResumeA>
          )
        })}
      </ResumeP>
      <Wrapper>
        <CVImage />
      </Wrapper>
    </Layout>
  )
}
export default DownloadsPage
