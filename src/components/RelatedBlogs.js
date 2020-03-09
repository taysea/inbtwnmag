import React, { useContext } from "react"
import { Grid, ResponsiveContext } from "grommet"
import { StaticQuery, graphql } from "gatsby"
import { Card } from "."

const RelatedBlogsComponent = ({ blogs }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Grid
      columns={{ count: size !== "small" ? 4 : 2, size: "auto" }}
      gap="medium"
      justify="center"
    >
      {blogs.map(blog => (
        <Card
          node={{ ...blog.node, slug: `blog/${blog.node.slug}` }}
          key={blog.node.id}
          type="minimal"
          height={size === "small" && "small"}
        />
      ))}
    </Grid>
  )
}

export const RelatedBlogs = props => (
  <StaticQuery
    query={graphql`
      {
        allContentfulBlog(limit: 1000) {
          edges {
            node {
              id
              slug
              tags
              title
              titleImage {
                description
                file {
                  url
                }
                fluid(quality: 50) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              description
              author {
                fullName
                slug
              }
              createdAt(fromNow: true)
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      let relatedBlogs = []
      data.allContentfulBlog.edges.forEach(node => {
        if (
          (node.node.tags === props.tags ||
            node.node.author.slug === props.authorSlug) &&
          node.node.slug !== props.slug
        ) {
          relatedBlogs.push(node)
        }
      })

      return <RelatedBlogsComponent blogs={relatedBlogs} />
    }}
  />
)
