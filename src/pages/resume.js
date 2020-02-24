import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

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
      <p
        style={{
          width: `90%`,
          marginBottom: `1.45rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
          paddingTop: `75px`,
          paddingBottom: `75px`,
          textAlign: `center`,
        }}
      >
        If you want to download my resume in PDF format, please click the link
        below
      </p>
      <div
        style={{
          textAlign: `center`,
        }}
      >
        {data.allFile.edges.map((file, index) => {
          return (
            <a href={file.node.publicURL} download>
              {file.node.name}
            </a>
          )
        })}
      </div>
    </Layout>
  )
}
export default DownloadsPage

// import React from "react"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import downloadFile from "../images/CV.pdf"
// const DownloadsPage = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allFile(filter: { extension: { eq: "pdf" } }) {
//         edges {
//           node {
//             publicURL
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <h1>All PDF Downloads</h1>
//       <li key={`pdf-${index}`}>
//         <a href={file.node.publicURL} download>
//           {file.node.name}
//         </a>
//       </li>

{
  /* <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>
            </li>
          )
        })}
      </ul> */
}
{
  /* </Layout>
  )
}
export default DownloadsPage */
}
// const IndexPage = () => (
//   <>
//     <a href={downloadFile} download>
//       Download the imported file
//     </a>
//     {` `}
//     <a href={`download.pdf`} download>
//       Download the file from the static folder
//     </a>
//   </>
// )

// export default IndexPage
