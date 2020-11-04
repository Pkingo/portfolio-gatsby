import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"
import styled from "styled-components"

const LayoutStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  .content {
    width: 600px;
    margin: 0 auto 2rem auto;

    @media (max-width: 750px) {
      width: auto;
      margin: 0 2rem;
    }
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <LayoutStyles>
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </LayoutStyles>
    </>
  )
}
