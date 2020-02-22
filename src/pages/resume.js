import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>All PDF Downloads</h1>
      <li key={`pdf-${index}`}>
        <a href={file.node.publicURL} download>
          {file.node.name}
        </a>
      </li>

      {/* <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>
            </li>
          )
        })}
      </ul> */}
    </Layout>
  )
}
export default DownloadsPage
// export default () => {
//   return (
//     <Layout>
//       <div
//         style={{
//           maxWidth: `300px`,
//           marginBottom: `1.45rem`,
//           marginLeft: `auto`,
//           marginRight: `auto`,
//         }}
//       >
//         <Image />
//       </div>
//       <h1>Here is my CV </h1>
//       <div
//         style={{
//           display: `flex`,
//           flexDirection: `row`,
//           justifyContent: `space-around`,
//           paddingLeft: `5px`,
//           paddingRight: `5px`,
//         }}
//       >
//         <Link to="/projectsReview/">About my projects</Link>
//         <Link to="/aboutme/">About me</Link>
//         <Link to="/contacts/">Contacts</Link>
//         <Link to="/resume/">My resume</Link>
//       </div>
//     </Layout>
//   )
// }
