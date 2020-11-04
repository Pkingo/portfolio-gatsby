import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import styled from "styled-components"

const PastaHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border-color: var(--green);
    padding: 2rem;
    border-radius: 1rem;
  }
  button:disabled {
    padding-left: 3.3rem;
    padding-right: 3.3rem;
    color: black;
  }
  button:hover {
    color: white;
    cursor: pointer;
    background-color: var(--green);
  }
`

export default function PastaTemplatePage({ data }) {
  const [buttonText, setButtonText] = useState("Copy Code")
  useEffect(() => {
    const timer = setTimeout(() => setButtonText("Copy Code"), 2000)
    return () => clearTimeout(timer)
  }, [buttonText])
  const copyCode = () => {
    const codeSnippet = document.getElementsByTagName("code")[0].textContent
    if (codeSnippet) {
      navigator.clipboard.writeText(codeSnippet).then(() => {
        setButtonText("Copied!")
      })
    }
  }
  return (
    <>
      <SEO title={data?.mdx.childMdx.frontmatter.title} />
      <PastaHeaderStyles>
        <h1>{data?.mdx.childMdx.frontmatter.title}</h1>
        <button disabled={buttonText === "Copied!"} onClick={copyCode}>
          {buttonText}
        </button>
      </PastaHeaderStyles>
      <MDXRenderer>{data?.mdx.childMdx.body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query($name: String!) {
    mdx: file(name: { eq: $name }) {
      childMdx {
        body
        frontmatter {
          type
          title
          date
          tools
        }
      }
    }
  }
`
