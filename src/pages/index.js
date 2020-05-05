import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, ResponsiveContext, Text } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import GoogleAds from "../components/GoogleAds"
import { HeroFeature } from "../components/HeroFeature"
import { Card } from "../components/Card/"
import { PartialWidthSection } from "../layouts/PartialWidth"

const IndexPage = ({ data: { main, hero, second } }) => {
  return (
    <Layout isNavPage isLanding>
      <SEO title="Home" />
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <PartialWidthSection>
              <Box gap="medium" pad={{ top: "medium" }}>
                {hero.edges.map(({ node }) => (
                  <HeroFeature
                    node={{ ...node, slug: `blog/${node.slug}` }}
                    key={node.id}
                  />
                ))}
                <Grid
                  columns={{ count: size !== "small" ? 3 : 2, size: "auto" }}
                  gap="medium"
                  margin={size === "small" ? { top: "large" } : undefined}
                >
                  {main.edges.map(({ node }) => (
                    <Card
                      node={{ ...node, slug: `blog/${node.slug}` }}
                      key={node.id}
                      type={size === "small" && "minimal"}
                      height={size === "small" && "small"}
                    />
                  ))}
                </Grid>
              </Box>
            </PartialWidthSection>
            {/* <Box
              height="small"
              background="#EAEAEA"
              pad={{ vertical: "small" }}
              margin={{ bottom: "large" }}
            >
              <PartialWidthSection marginBottom="none">
                <GoogleAds slot="1974438094" />
              </PartialWidthSection>
            </Box> */}
            <PartialWidthSection>
              <Box
                pad={{ horizontal: "medium", vertical: "small" }}
                background="#EAEAEA"
                margin={{ bottom: "medium" }}
              >
                <Text as="h2" margin="none">
                  Here's what's popular right now
                </Text>
              </Box>
              <Grid
                columns={{ count: size !== "small" ? 2 : 1, size: "auto" }}
                gap="medium"
              >
                {second.edges.map(({ node }) => (
                  <Card
                    node={{ ...node, slug: `/blog/${node.slug}` }}
                    key={node.id}
                    margin={size !== "small" ? { bottom: "medium" } : undefined}
                    type="half-width"
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

    main: allContentfulBlog(
      limit: 6
      filter: {
        slug: {
          ne: "sabrina-santiago-on-her-infatuation-with-rooftop-portraiture-and-street"
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
    second: allContentfulBlog(limit: 4, skip: 7) {
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
`
