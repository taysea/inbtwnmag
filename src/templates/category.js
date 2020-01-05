import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, Heading, Text } from "grommet"
import { Card } from "../components/Card/"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PartialWidthSection } from "../sections/PartialWidth"

function CategoryTemplate({ data: { allContentfulBlog }, pageContext }) {
  return (
    <Layout>
      <Box gap="medium">
        <Box
          // background="light-1"
          align="center"
          border={{ side: "bottom", color: "light-3" }}
        >
          <PartialWidthSection
            marginBottom="none"
            pad="small"
            gap="medium"
            margin={{ top: "medium" }}
          >
            <Box align="center">
              <Text size="2.5em" weight="bold">
                {pageContext.tags}
              </Text>
            </Box>
            <Box direction="row" justify="center">
              <Box width="xsmall">
                <Text size="small" color="dark-3" weight="bold">
                  Previous
                </Text>
              </Box>
              <Box flex="grow" basis="small" align="center">
                <Text size="small" color="dark-3" weight="bold">
                  1-20 out of {pageContext.totalCount}
                </Text>
              </Box>
              <Box width="xsmall" align="end">
                <Text size="small" color="dark-3" weight="bold">
                  Next
                </Text>
              </Box>
            </Box>
          </PartialWidthSection>
        </Box>
        <PartialWidthSection>
          <Grid columns="30%" gap="medium" justify="center">
            {allContentfulBlog.edges.map(({ node }) => (
              <Card
                node={{ ...node, slug: `blog/${node.slug}` }}
                key={node.id}
              />
            ))}
          </Grid>
        </PartialWidthSection>
      </Box>
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
