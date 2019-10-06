import React from "react"
import { Link } from "gatsby"
import { Box, Text, Image } from "grommet"

export const Topic = ({ data: { allContentfulBlog } }) => (
  <Grid columns="30%" gap="medium" justify="center">
    {allContentfulBlog.edges.map(({ node }) => (
      <Card node={{ ...node, slug: `blog/${node.slug}` }} key={node.id} />
    ))}
  </Grid>
)

export const query = graphql`
  {
    allContentfulBlog(filter: { tags: { eq: "Photography" } }) {
      edges {
        node {
          id
          slug
          tags
          title
          titleImage {
            file {
              url
            }
          }
          description
          author {
            fullName
            slug
          }
        }
      }
    }
  }
`
