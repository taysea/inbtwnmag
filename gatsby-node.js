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
        group(field: tags) {
          fieldValue
          totalCount
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
          tags: edge.node.tags,
        },
      })
    })

    result.data.categoryQuery.group.forEach(tag => {
      createPage({
        path: `/categories/${tag.fieldValue}`.toLowerCase(),
        component: categoryTemplate,
        context: {
          tags: tag.fieldValue,
          totalCount: tag.totalCount,
        },
      })
    })
  })
}
