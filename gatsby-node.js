const path = require("path")

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve("./src/templates/Project.jsx")
  const { data } = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
        nodes {
          slug
          id
          frontmatter {
            image
          }
        }
      }
    }
  `)
  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: `projects/${node.slug}`,
      component: projectTemplate,
      context: {
        name: node.slug,
        image: node.frontmatter.image,
      },
    })
  })
}

async function turnPastasIntoPages({ graphql, actions }) {
  const pastaTemplate = path.resolve("./src/templates/Pasta.jsx")
  const { data } = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "pasta" } } }) {
        nodes {
          slug
          id
        }
      }
    }
  `)
  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: `pasta/${node.slug}`,
      component: pastaTemplate,
      context: {
        name: node.slug,
      },
    })
  })
}

async function createPages(params) {
  await Promise.all([
    turnProjectsIntoPages(params),
    turnPastasIntoPages(params),
  ])
}

module.exports = {
  createPages,
}
