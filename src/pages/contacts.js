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
      <h1
        style={{
          marginLeft: `20px`,
          textAlign: `center`,
        }}
      >
        Please feel free to contact me if you have any questions{" "}
      </h1>

      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-around`,
        }}
      >
        <p>email: igor.slabykh@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/igor-slabykh-2787862b/">
            Linked-In
          </a>
        </p>
        <p>cell phone: (703) 509-27-35</p>
      </div>
    </Layout>
  )
}
