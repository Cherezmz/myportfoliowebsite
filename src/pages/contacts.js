import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"

const ContactsDiv = styled.div`
  max-width: 500px;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 10px;
`

const ContactsH1 = styled.h1`
  margin-left: 20px;
  text-align: center;
`

const ContactsDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  font-size: 20px;
  @media (max-width: 810px) {
    flex-flow: column;
    align-items: center;
  }
`

export default () => {
  return (
    <Layout>
      <ContactsDiv>
        <Image />
      </ContactsDiv>
      <ContactsH1>
        Please feel free to contact me if you have any questions{" "}
      </ContactsH1>

      <ContactsDetailsWrapper>
        <p>email: igor.slabykh@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/igor-slabykh-2787862b/">
            Linked-In
          </a>
        </p>
        <p>cell phone: (703) 509-27-35</p>
      </ContactsDetailsWrapper>
    </Layout>
  )
}
