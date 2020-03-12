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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
`
const LinkDiv = styled.div``

const LinkH4 = styled.h4`
  color: white;
  font-weight: bolder;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-decoration: none;
  @media (max-width: 600px) {
    border: 1px solid black;
    margin: 5px;
    text-decoration: none;
  }
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
  @media (max-width: 600px) {
    height: 200px;
  }
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
        <LinkDiv>
          <Link>
            <LinkH4>Home</LinkH4>
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Link to="/projectsReview/">
            <LinkH4> My projects </LinkH4>
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Link to="/aboutme/">
            {" "}
            <LinkH4>About me </LinkH4>
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Link to="/contacts/">
            <LinkH4>Contacts</LinkH4>
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Link to="/resume/">
            {" "}
            <LinkH4> My resume </LinkH4>
          </Link>
        </LinkDiv>
      </NavBarDiv>
    </LayoutHeader>
    <main>{children}</main>
    <LayoutFooter>
      <LayoutText>This GatsbyJS+React website is my project too :)</LayoutText>
    </LayoutFooter>
  </React.Fragment>
)

export default Layout
