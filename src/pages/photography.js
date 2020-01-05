import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, Text } from "grommet"
import { Card } from "../components/Card/"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PartialWidthSection } from "../sections/PartialWidth"

const SecondPage = ({ data: { allContentfulBlog } }) => (
  <Layout>
    <SEO title="Page two" />
    <PartialWidthSection>
      <Box gap="medium">
        <Box align="center">
          <Text size="xxlarge" weight="bold">
            Photography
          </Text>
        </Box>
        <Box direction="row" justify="center">
          <Box width="xsmall">
            <Text size="small" color="dark-5" weight="bold">
              Previous
            </Text>
          </Box>
          <Box flex="grow" basis="small" align="center">
            <Text size="small" color="dark-5" weight="bold">
              1-20 out of 80
            </Text>
          </Box>
          <Box width="xsmall" align="end">
            <Text size="small" color="dark-5" weight="bold">
              Next
            </Text>
          </Box>
        </Box>
        <Grid columns="30%" gap="medium" justify="center">
          {allContentfulBlog.edges.map(({ node }) => (
            <Card node={{ ...node, slug: `blog/${node.slug}` }} key={node.id} />
          ))}
        </Grid>
      </Box>
    </PartialWidthSection>
  </Layout>
)

export default SecondPage

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
