import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/SEO"
import ContentList from "../components/ContentList"

const Img = styled(Image)`
  border-radius: 50%;
`

export default function HomePage({ data }) {
  const {
    file,
    allMdx: { nodes: allMdx },
  } = data
  return (
    <>
      <SEO title="Hjem" image={file.childCloudinaryAsset.fluid.src} />
      <h1>Hi! I'm Philip, and I'm a web developer</h1>
      <p>
        I'm from Denmark, but currently I live in Czech Republic with my
        girlfriend to experience life abroad and learn from the talented people
        I get to work with here.
      </p>
      <p>
        I'm a JavaScript/TypeScript software developer who focuses on front-end
        frameworks such as React and Svelte. I have a passion for Web
        Accessibility and preferment applications.
      </p>
      <p>
        I have experience working large and complex React web applications that
        require cross-team collaboration and global state management (Redux), as
        well as smaller web applications such as admin dashboards and user
        forms. I have worked in Agile settings with Scrum and Kanban
      </p>
      <p>
        I have also worked with back-end services done in NodeJS and making
        scripts for automating tasks. I'm not afraid to take on a hard challenge
        and dive into unknown territory.
      </p>
      <Img fluid={file.childCloudinaryAsset.fluid} alt="Profile" />
      <ContentList content={allMdx} base="projects" title="Projects" />
    </>
  )
}

export const query = graphql`
  query {
    file(name: { eq: "profile" }) {
      childCloudinaryAsset {
        fluid(maxWidth: 600) {
          ...CloudinaryAssetFluid
        }
      }
    }
    allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
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
