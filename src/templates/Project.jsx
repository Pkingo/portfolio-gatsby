import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/SEO"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"

export default ({ data }) => {
  return (
    <div>
      <SEO
        title={data?.mdx.childMdx.frontmatter.title}
        image={data?.image?.childCloudinaryAsset?.fluid?.src}
      />
      <h1>{data?.mdx.childMdx.frontmatter.title}</h1>
      <MDXRenderer>{data?.mdx.childMdx.body}</MDXRenderer>
      {data?.image && (
        <Image
          fluid={data?.image.childCloudinaryAsset.fluid}
          alt={data?.mdx.childMdx.frontmatter.title}
        />
      )}
    </div>
  )
}

export const query = graphql`
  query($image: String, $name: String!) {
    image: file(name: { eq: $image }) {
      childCloudinaryAsset {
        fluid(maxWidth: 600) {
          ...CloudinaryAssetFluid
        }
      }
    }
    mdx: file(name: { eq: $name }) {
      childMdx {
        body
        frontmatter {
          title
          tools
          link
          github
        }
      }
    }
  }
`
