import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Box, Grid, Heading, ResponsiveContext, Text } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import GoogleAds from "../components/GoogleAds"
import { HeroFeature } from "../components/HeroFeature"
import { Card } from "../components/Card/"
import { PartialWidthSection } from "../layouts/PartialWidth"

const MasonryGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .grid-item: nth-child(7n+1) {
    grid-column: span 2;
    grid-row: span 1;
  }

  .grid-item: nth-child(7n+2) {
    grid-column: span 1;
    grid-row: span 2;
  }

  .grid-item: nth-child(7n+4) {
    grid-column: span 1;
    grid-row: span 2;
  }

  .grid-item: nth-child(7n+5) {
    grid-column: span 3;
    grid-row: span 1;
  }
`

const IndexPage = ({ data: { main, hero, second, secondFeature } }) => {
  return (
    <Layout isNavPage isLanding>
      <SEO title="Home" />
      <ResponsiveContext.Consumer>
        {size => (
          <>
            {hero.edges.map(({ node }) => (
              <HeroFeature
                node={{ ...node, slug: `blog/${node.slug}` }}
                key={node.id}
              />
            ))}
            <PartialWidthSection>
              <Box gap="medium" pad={{ vertical: "medium" }}>
                <Grid
                  columns={
                    size !== "small" ? ["auto", "auto", "auto"] : ["auto"]
                  }
                  gap="large"
                >
                  {main.edges.map(({ node }) => (
                    <Card
                      node={{ ...node, slug: `blog/${node.slug}` }}
                      key={node.id}
                      type="minimal"
                      height={size === "small" && "small"}
                    />
                  ))}
                </Grid>
              </Box>
            </PartialWidthSection>
            {secondFeature.edges.map(({ node }) => (
              <HeroFeature
                node={{ ...node, slug: `blog/${node.slug}` }}
                key={node.id}
              />
            ))}
            <PartialWidthSection>
              <Box pad={{ bottom: "medium" }}>
                <Heading level={2} margin="none" weight={500}>
                  Featured stories
                </Heading>
              </Box>
              <Grid
                columns={
                  size !== "small" ? ["flex", "flex", "flex", "flex"] : ["auto"]
                }
                gap="large"
              >
                {second.edges.map(({ node }) => (
                  <Card
                    node={{ ...node, slug: `/blog/${node.slug}` }}
                    key={node.id}
                    margin={size !== "small" ? { bottom: "medium" } : undefined}
                    type="minimal"
                  />
                ))}
              </Grid>
            </PartialWidthSection>
            {/* <Box
              height="medium"
              background="#EAEAEA"
              pad={{ vertical: "small" }}
            >
              <PartialWidthSection marginBottom="none">
                <GoogleAds slot="1974438094" />
              </PartialWidthSection>
            </Box> */}
          </>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
  {
    hero: allContentfulBlog(
      filter: { slug: { eq: "bahati-simoens-how-her-childhood-her-mothers-life-and-todays-society" } }
    ) {
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
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 50
              placeholder: BLURRED
            )
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
    secondFeature: allContentfulBlog(
      filter: {
        slug: { eq: "coco-fernandez-takes-us-into-her-world-of-form-and-color" }
      }
    ) {
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
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 50
              placeholder: BLURRED
            )
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
    main: allContentfulBlog(
      limit: 6
      filter: { slug: { ne: "bahati-simoens-how-her-childhood-her-mothers-life-and-todays-society" } }
    ) {
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
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 50
              placeholder: BLURRED
            )
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
    second: allContentfulBlog(limit: 8, skip: 19) {
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
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 50
              placeholder: BLURRED
            )
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
