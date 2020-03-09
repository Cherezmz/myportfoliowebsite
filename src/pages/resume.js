import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const ResumeP = styled.p`
  width: 90%;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 75px;
  padding-bottom: 75px;
  text-align: center;
`

const Wrapper = styled.div`
  text-align: center;
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
        If you want to download my resume in PDF format, please click the link
        below
      </ResumeP>
      <Wrapper>
        {data.allFile.edges.map((file, index) => {
          return (
            <a href={file.node.publicURL} download>
              {file.node.name}
            </a>
          )
        })}
      </Wrapper>
    </Layout>
  )
}
export default DownloadsPage
