const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  return graphql(`
    {
      blogQuery: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
      categoryQuery: allContentfulBlog {
        edges {
          node {
            tags
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.blogQuery.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: blogTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
    result.data.categoryQuery.edges.forEach(edge => {
      createPage({
        path: `/categories/${edge.node.tags}`,
        component: categoryTemplate,
        context: {
          tags: edge.node.tags,
        },
      })
    })
  })
}
