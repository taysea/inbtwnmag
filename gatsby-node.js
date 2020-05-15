const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const aboutTemplate = path.resolve(`src/templates/about.js`)
  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const authorTemplate = path.resolve(`src/templates/author.js`)
  const orderConfirmationTemplate = path.resolve(
    `src/templates/order-confirmation.js`
  )
  const shopTemplate = path.resolve("./src/templates/shop.js")
  const cartTemplate = path.resolve("./src/templates/cart.js")
  const productDetailsTemplate = path.resolve(
    "./src/templates/product-details.js"
  )
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
      productQuery: allStripeSku(sort: { fields: [price] }) {
        edges {
          node {
            id
            currency
            price
            attributes {
              name
            }
            product {
              id
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const string_to_slug = str => {
      str = str.replace(/^\s+|\s+$/g, "") // trim
      str = str.toLowerCase()

      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
      var to = "aaaaeeeeiiiioooouuuunc------"
      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes

      return str
    }

    result.data.productQuery.edges.forEach(({ node }) => {
      createPage({
        path: `/shop/${string_to_slug(node.product.name)}`,
        component: productDetailsTemplate,
        context: {
          slug: string_to_slug(node.product.name),
          sku: node.id,
          productId: node.product.id,
        },
      })
    })

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
    createPage({
      path: `/cart`,
      component: cartTemplate,
    })
    createPage({
      path: `/shop`,
      component: shopTemplate,
    })
    createPage({
      path: `/order-confirmation`,
      component: orderConfirmationTemplate,
    })
  })
}
