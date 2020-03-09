import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading, Text, ResponsiveContext } from "grommet"
import { PartialWidthSection } from "../layouts"
import {
  AuthorBlogFooter,
  BodyText,
  CardFooter,
  RelatedBlogs,
  Share,
} from "../components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { DiscussionEmbed } from "disqus-react"

const BlogTemplate = ({ data }) => {
  const disqusShortname = "inbtwnmag"
  const disqusConfig = {
    url: `https://inbtwnmag.com/blog/${data.contentfulBlog.slug}`,
    identifier: data.contentfulBlog.id,
    title: data.contentfulBlog.title,
  }
  return (
    <Layout>
      <SEO
        title={data.contentfulBlog.seo.title}
        description={data.contentfulBlog.seo.description}
      />
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <PartialWidthSection marginBottom="large">
              <Box width="large" gap="medium" margin="auto">
                <Box gap="medium" align="center">
                  <Text
                    weight="bold"
                    size={size !== "small" ? "2.5em" : "2em"}
                    textAlign="center"
                  >
                    {data.contentfulBlog.title}
                  </Text>
                  <CardFooter
                    author={data.contentfulBlog.author}
                    tags={data.contentfulBlog.tags}
                    createdAt={data.contentfulBlog.createdAt}
                    size="small"
                  />
                  <Share
                    url={`https://inbtwnmag.com/blog/${data.contentfulBlog.slug}`}
                  />
                </Box>
              </Box>
            </PartialWidthSection>
            <Box
              height={size !== "small" ? "80vh" : "medium"}
              margin={{ bottom: "medium" }}
            >
              <Img
                fluid={data.contentfulBlog.titleImage.fluid}
                alt={data.contentfulBlog.titleImage.description}
                style={{ height: "100%" }}
              />
            </Box>
            <PartialWidthSection>
              <Box width="large" gap="small" margin="auto">
                <BodyText>
                  {documentToReactComponents(
                    data.contentfulBlog.body.json,

                    {
                      renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: node => {
                          const image = node.data.target.fields.file["en-US"]
                          const width = image.details.image.width
                          const height = image.details.image.height
                          const aspectRatio = width / height
                          const containerHeight =
                            aspectRatio > 1
                              ? { max: size !== "small" ? "large" : "medium" }
                              : size !== "small"
                              ? "large"
                              : "medium"
                          return (
                            <Box
                              height={
                                size !== "small" ? containerHeight : "medium"
                              }
                            >
                              <Img
                                width={image.details.image.width}
                                fluid={{
                                  aspectRatio:
                                    width / image.details.image.height,
                                  src: image.url + "?w=630&q=50",
                                  srcSet: `
                      ${image.url}?w=${width / 4}&&q=50 ${width / 4}w,
                      ${image.url}?w=${width / 2}&&q=50 ${width / 2}w,
                      ${image.url}?w=${width}&&q=50 ${width}w,
                      ${image.url}?w=${width * 1.5}&&q=50 ${width * 1.5}w,
                      ${image.url}?w=1000&&q=50 1000w,
                  `,
                                  sizes: "(max-width: 630px) 100vw, 630px",
                                }}
                                style={{ height: "100%" }}
                              />
                            </Box>
                          )
                        },
                      },
                    }
                  )}
                </BodyText>
                <Share
                  url={`https://inbtwnmag.com/blog/${data.contentfulBlog.slug}`}
                />
                <AuthorBlogFooter author={data.contentfulBlog.author} />
                <Heading level={3}>You might like these too...</Heading>
                <RelatedBlogs
                  authorSlug={data.contentfulBlog.author.slug}
                  tags={data.contentfulBlog.tags}
                  slug={data.contentfulBlog.slug}
                />
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </Box>
            </PartialWidthSection>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      tags
      seo {
        title
        description
      }
      author {
        bio
        fullName
        photo {
          description
          file {
            url
          }
          fluid(quality: 50) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        slug
      }
      createdAt(fromNow: true)
      body {
        json
      }
      titleImage {
        description
        file {
          url
        }
        fluid(quality: 50) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
export default BlogTemplate
