import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

export default () => {
  return (
    <Layout>
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <Image />
      </div>
      <h1>This is about me page </h1>
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
