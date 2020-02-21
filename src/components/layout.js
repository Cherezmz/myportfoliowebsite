import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => (
  <React.Fragment>
    <header
      className="header"
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        height: `100px`,
        textAlign: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
        }}
      >
        {" "}
        My Portfolio{" "}
      </Link>
    </header>
    <main
      className="content"
      style={{
        maxWidth: `300px`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      {children}
    </main>
  </React.Fragment>
)

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql, Link } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
