import React from "react"
import { graphql } from "gatsby"
import ContentList from "../components/ContentList"

export default function PastaPage({ data }) {
  const {
    allMdx: { nodes: allMdx },
  } = data
  return (
    <>
      <h1>
        Copy/Paste{" "}
        <span role="img" aria-label="pasta dish emoji">
          🍝
        </span>
      </h1>
      <p>
        This is a collection of code snippet that I find myself use often or
        code snippet that I find neat. These snippets are not "novice" but code
        I often find myself thinking "how is it you do that thing" or small code
        snippet that is done in a cool/inspiring way. I often copy code from
        here, feel free to do the same
      </p>

      <p>
        <strong>Disclaimer:</strong> I have not written all of these code
        snippet myself, but often found some code online that I developed
        further and decide to keep, so that I could easily find them again
      </p>
      <ContentList content={allMdx} base="pasta" />
    </>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "pasta" } } }) {
      nodes {
        id
        slug
        frontmatter {
          title
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`
