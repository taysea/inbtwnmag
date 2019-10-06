import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, Heading } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroFeature } from "../components/HeroFeature"
import { Card } from "../components/Card/"
import { HalfWidthCard } from "../components/HalfWidthCard"
import { PartialWidthSection } from "../sections/PartialWidth"

const IndexPage = ({ data: { main, hero, second } }) => (
  <Layout>
    <SEO title="Home" />
    <PartialWidthSection>
      <Box gap="medium">
        {hero.edges.map(({ node }) => (
          <HeroFeature
            node={{ ...node, slug: `blog/${node.slug}` }}
            key={node.id}
          />
        ))}
        <Grid columns={{ count: 3, size: "auto" }} gap="medium">
          {main.edges.map(({ node }) => (
            <Card node={{ ...node, slug: `blog/${node.slug}` }} key={node.id} />
          ))}
        </Grid>
      </Box>
    </PartialWidthSection>
    <Box height="30em" background="light-3" />
    <PartialWidthSection>
      <Box align="center" pad={{ vertical: "medium" }}>
        <Heading level={3}>Trending posts</Heading>
      </Box>
      <Grid columns={{ count: 2, size: "auto" }} gap="medium">
        {second.edges.map(({ node }) => (
          <HalfWidthCard
            node={{ ...node, slug: `blog/${node.slug}` }}
            key={node.id}
            height="400px"
            margin={{ bottom: "large" }}
          />
        ))}
      </Grid>
    </PartialWidthSection>
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    hero: allContentfulBlog(
      filter: {
        slug: {
          eq: "sabrina-santiago-on-her-infatuation-with-rooftop-portraiture-and-street"
        }
      }
    ) {
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

    main: allContentfulBlog(limit: 6, skip: 1) {
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
    second: allContentfulBlog(limit: 4) {
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
