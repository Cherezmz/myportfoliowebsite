import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  padding-top: 4%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  line-height: 20px;
  letter-spacing: 0.1em;
`

const LayoutFooter = styled.footer`
  background: rebeccapurple;
  margin-top: 4%;
  height: 100px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const LayoutHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  height: 100px;
  text-align: center;
`

const LayoutText = styled.h1`
  color: white;
  font-size: 25px;
  padding-top: 25px;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <LayoutHeader>
      <NavBarDiv>
        <Link
          to="/"
          style={{
            color: `white`,
            fontWeight: `bolder`,
          }}
        >
          Home
        </Link>
        <Link
          to="/projectsReview/"
          style={{
            color: `white`,
            fontWeight: `bolder`,
          }}
        >
          My projects
        </Link>
        <Link
          to="/aboutme/"
          style={{
            color: `white`,
            fontWeight: `bolder`,
          }}
        >
          About me
        </Link>
        <Link
          to="/contacts/"
          style={{
            color: `white`,
            fontWeight: `bolder`,
          }}
        >
          Contacts
        </Link>
        <Link
          to="/resume/"
          style={{
            color: `white`,
            fontWeight: `bolder`,
          }}
        >
          My resume
        </Link>
      </NavBarDiv>
    </LayoutHeader>
    <main>{children}</main>
    <LayoutFooter>
      <LayoutText>This GatsbyJS+React website is my project too :)</LayoutText>
    </LayoutFooter>
  </React.Fragment>
)

export default Layout
