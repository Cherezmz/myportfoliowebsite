import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

export default () => {
  return (
    <Layout>
      <div
        style={{
          maxWidth: `350px`,
          marginBottom: `1.45rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
          paddingTop: `70px`,
        }}
      >
        <Image />
      </div>
      <p
        style={{
          marginLeft: `20px`,
          textIndent: `20px`,
          textAlign: `justify`,
          marginRight: `20px`,
          paddingTop: `70px`,
        }}
      >
        I am a highly accomplished professional with a record of repeated
        success over sixteen years of legal, management and business
        experience.Companies such as Microsoft, Adobe Systems, Corel, and
        Graphisoft were among my clients and employers.{" "}
      </p>
      <p
        style={{
          marginLeft: `20px`,
          textIndent: `20px`,
          textAlign: `justify`,
          marginRight: `20px`,
        }}
      >
        I recently moved to the US, have begun my career in software development
        from scratch, and graduated from three-month, 500-hour full-time and
        full-stack General Assembly Software Engineering Immersive program.{" "}
      </p>

      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-around`,
          paddingLeft: `5px`,
          paddingRight: `5px`,
        }}
      ></div>
    </Layout>
  )
}
