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

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .content {
    width: 600px;
    margin: 0 auto 2rem auto;

    @media (max-width: 750px) {
      width: auto;
      margin: 6rem 2rem 0 2rem;
    }
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <LayoutStyles>
        <Header />
        <main role="main" className="content">
          {children}
        </main>
        <Footer />
      </LayoutStyles>
    </>
  )
}
