const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const aboutTemplate = path.resolve(`src/templates/about.js`)
  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const authorTemplate = path.resolve(`src/templates/author.js`)

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
      authorQuery: allContentfulBlog {
        group(field: author___slug) {
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

    result.data.authorQuery.group.forEach(author => {
      createPage({
        path: `/author/${author.fieldValue}`.toLowerCase(),
        component: authorTemplate,
        context: {
          slug: author.fieldValue,
          totalCount: author.totalCount,
        },
      })
    })

    createPage({
      path: `/about`,
      component: aboutTemplate,
    })
  })
}
