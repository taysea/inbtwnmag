import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, ResponsiveContext, Text } from "grommet"
import { Card } from "../components/Card"

import Layout from "../components/layout"
// import SEO from "../components"
import { PartialWidthSection } from "../layouts"

function CategoryTemplate({ data: { allContentfulBlog }, pageContext }) {
  return (
    <Layout isNavPage>
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <Box>
              <Box
                align="center"
                border={{ side: "top", color: "light-3" }}
                background="#FFF"
                pad={{ top: "medium" }}
              >
                <PartialWidthSection gap="small">
                  <Box align="center">
                    <Text as="h1" size="2.5em" margin="small">
                      {pageContext.tags}
                    </Text>
                  </Box>
                  {/* <Box direction="row" justify="center">
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
                  </Box> */}
                </PartialWidthSection>
              </Box>
              <PartialWidthSection>
                <Grid
                  columns={{ count: size !== "small" ? 4 : 2, size: "auto" }}
                  gap="medium"
                >
                  {allContentfulBlog.edges.map(({ node }) => (
                    <Card
                      node={{ ...node, slug: `/blog/${node.slug}` }}
                      key={node.id}
                      type="minimal"
                      height={size === "small" && "small"}
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
`
export default CategoryTemplate
