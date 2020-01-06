import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, Heading, Text, ResponsiveContext } from "grommet"
import { Card } from "../components/Card"

import Layout from "../components/layout"
// import SEO from "../components"
import { PartialWidthSection } from "../layouts"

function CategoryTemplate({ data: { allContentfulBlog }, pageContext }) {
  return (
    <Layout>
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <Box gap="medium">
              <Box
                // background="light-1"
                align="center"
                border={{ side: "bottom", color: "light-3" }}
              >
                <PartialWidthSection gap="medium">
                  <Box align="center">
                    <Heading margin="small" level={1}>
                      {pageContext.tags}
                    </Heading>
                  </Box>
                  <Box direction="row" justify="center">
                    <Box width="xsmall">
                      <Text size="small" color="dark-2" weight="bold">
                        Previous
                      </Text>
                    </Box>
                    <Box flex="grow" basis="small" align="center">
                      <Text size="small" color="dark-2" weight="bold">
                        1-20 out of {pageContext.totalCount}
                      </Text>
                    </Box>
                    <Box width="xsmall" align="end">
                      <Text size="small" color="dark-2" weight="bold">
                        Next
                      </Text>
                    </Box>
                  </Box>
                </PartialWidthSection>
              </Box>
              <PartialWidthSection>
                <Grid
                  columns={{ count: size !== "small" ? 3 : 1, size: "auto" }}
                  gap="medium"
                  justify="center"
                >
                  {allContentfulBlog.edges.map(({ node }) => (
                    <Card
                      node={{ ...node, slug: `blog/${node.slug}` }}
                      key={node.id}
                    />
                  ))}
                </Grid>
              </PartialWidthSection>
            </Box>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const query = graphql`
  query categoryQuery($tags: String!) {
    allContentfulBlog(filter: { tags: { eq: $tags } }) {
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
export default CategoryTemplate
