import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import GoogleAds from "../components/GoogleAds"
import { Box, Image, Text, ResponsiveContext } from "grommet"
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
              <Box
                width="large"
                gap="medium"
                margin="auto"
                pad={{ top: "large" }}
              >
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
            <Box>
              <Box
                height={size !== "small" ? "80vh" : "medium"}
                margin={{ bottom: "medium" }}
              >
                {data.contentfulBlog.titleImage.file.details.size <= 100000 ? (
                  <Image
                    src={data.contentfulBlog.titleImage.file.url}
                    alt={data.contentfulBlog.titleImage.description}
                    fit="cover"
                  />
                ) : (
                  <Img
                    fluid={data.contentfulBlog.titleImage.fluid}
                    alt={data.contentfulBlog.titleImage.description}
                    style={{ height: "100%" }}
                  />
                )}
              </Box>
              {data.contentfulBlog.showCaptions && (
                <PartialWidthSection marginBottom="none" pad="none">
                  <Box width="large" margin="auto">
                    <Text size="small">
                      {data.contentfulBlog.titleImage.description}
                    </Text>
                  </Box>
                </PartialWidthSection>
              )}
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
                          const description =
                            node.data.target.fields.description &&
                            node.data.target.fields.description["en-US"]
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
                            <Box gap="small">
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
                              <Box>
                                <Text size="small">
                                  {data.contentfulBlog.showCaptions &&
                                    description}
                                </Text>
                              </Box>
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
                <Box
                  pad={{ horizontal: "medium", vertical: "small" }}
                  background="#EAEAEA"
                  margin={{ vertical: "medium" }}
                >
                  <Text as="h2" margin="none">
                    You might like these too...
                  </Text>
                </Box>
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
            {/* <Box
              height="small"
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
          details {
            size
          }
          url
        }
        fluid(quality: 50) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      showCaptions
    }
  }
`
export default BlogTemplate
