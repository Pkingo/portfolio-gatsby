import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ContentLinkStyles = styled(Link)`
  padding-left: 1rem;
  text-decoration: none;
  color: black;
  & > * {
    margin: 0;
  }
  &:hover {
    border-left-color: var(--orange);
    border-left-width: 0.5rem;
    border-left-style: solid;
    padding-left: 0.5rem;
  }
`

const ContentListStyles = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
  gap: 2rem;
  padding: 2rem 0;
`

function ContentLink({ frontmatter, slug, excerpt, base }) {
  return (
    <ContentLinkStyles to={`/${base}/${slug}`}>
      <h4>{frontmatter.title}</h4>
      <p>{excerpt}</p>
    </ContentLinkStyles>
  )
}

export default function ContentList({ content, title, base }) {
  return (
    <ContentListStyles>
      {title && <h3>{title}</h3>}
      {content.map(node => (
        <ContentLink key={node.id} {...node} base={base} />
      ))}
    </ContentListStyles>
  )
}
