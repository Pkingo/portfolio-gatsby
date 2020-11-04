import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

const FooterStyles = styled.footer`
  display: grid;
  color: white;
  grid-template-columns: 1fr 100px;
  gap: 2rem;
  grid-template-areas:
    "title icons"
    "line line"
    "copyright copyright";
  padding: 2rem;
  background-color: var(--green);

  .title {
    grid-area: title;
    & > * {
      margin: 0;
    }
  }
  .line {
    grid-area: line;
    border: 1px solid white;
  }
  .icons {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
  }
  .copyright {
    grid-area: copyright;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: auto;
    p {
      margin: 0;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "icons ."
      "line line"
      "copyright copyright";

    .copyright {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0;
    }

    .icons {
      justify-content: flex-start;
    }
  }

  .react-icon {
    color: white;
    font-size: 3rem;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="title">
        <h2>Let's create something together!</h2>
        <p>Reach out if you also like React and/or Svelte LinkedIn GitHub</p>
      </div>
      <span className="icons">
        <a
          href="https://www.linkedin.com/in/pkingo/"
          target="_blank"
          rel="noreferrer"
        >
          <span role="img" aria-label="LinkedIn">
            <FaLinkedin className="react-icon" />
          </span>
        </a>
        <a href="https://github.com/Pkingo" target="_blank" rel="noreferrer">
          <span role="img" aria-label="Github">
            <FaGithubSquare className="react-icon" />
          </span>
        </a>
      </span>
      <div className="line" />
      <div className="copyright">
        <p>Made by Philip Anderas Kingo with Gatsby, React and MDX</p>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </div>
    </FooterStyles>
  )
}
