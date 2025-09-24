import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
// import { DiscussionEmbed } from "disqus-react"

const BlogBody = ({ body, showCaptions, description }) => {
  if (!body?.raw) return undefined

  let document
  try {
    document = JSON.parse(body.raw)
  } catch (e) {
    console.error("Failed to parse Contentful rich text:", e)
    return null
  }

  const referencesMap = {}
  body.references?.forEach(ref => {
    if (ref?.contentful_id) {
      referencesMap[ref.contentful_id] = ref
    }
  })

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = referencesMap[node.data.target.sys.id]
        if (!asset) return null

        const image = getImage(asset.gatsbyImageData)
        if (image) {
          return (
            <Box gap="small">
              <GatsbyImage image={image} alt={asset.description || ""} />
              <Box>
                <Text size="small">
                  {showCaptions ? asset.description : undefined}
                </Text>
              </Box>
            </Box>
          )
        }
        if (asset.file?.url) {
          return <img src={asset.file.url} alt={asset.description || ""} />
        }
        return null
      },

      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const entry = referencesMap[node.data.target.sys.id]
        if (!entry) return null

        if (entry.__typename === "ContentfulBlog") {
          return (
            <div className="embedded-blog">
              <a href={`/blog/${entry.slug}`}>{entry.title}</a>
            </div>
          )
        }

        return null
      },
    },
  }

  return <>{documentToReactComponents(document, options)}</>
}

const BlogTemplate = ({ data }) => {
  // const disqusShortname = "inbtwnmag"
  // const disqusConfig = {
  //   url: `https://inbtwnmag.com/blog/${data.contentfulBlog.slug}`,
  //   identifier: data.contentfulBlog.id,
  //   title: data.contentfulBlog.title,
  // }
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
                    artist={data.contentfulBlog.artist}
                    author={data.contentfulBlog.author}
                    tags={data.contentfulBlog.tags}
                    createdAt={data.contentfulBlog.createdAt}
                    size="small"
                    blog
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
                  <GatsbyImage
                    image={getImage(data.contentfulBlog.titleImage)}
                    alt={data.contentfulBlog.titleImage.description}
                    style={{ height: "100%" }}
                  />
                )}
              </Box>
              {data.contentfulBlog.showCaptions && (
                <PartialWidthSection marginBottom="none" pad="none">
                  <Box
                    width="large"
                    margin="auto"
                    pad={{ horizontal: size !== "small" ? "large" : "medium" }}
                  >
                    <Text size="small">
                      {data.contentfulBlog.titleImage.description}
                    </Text>
                  </Box>
                </PartialWidthSection>
              )}
            </Box>
            <PartialWidthSection>
              <Box
                width="large"
                gap="small"
                pad={{ horizontal: size !== "small" ? "large" : undefined }}
                margin="auto"
              >
                <BodyText>
                  <BlogBody
                    body={data.contentfulBlog.body}
                    showCaptions={data.contentfulBlog.showCaptions}
                  />
                </BodyText>
                <Share
                  url={`https://inbtwnmag.com/blog/${data.contentfulBlog.slug}`}
                />
                <AuthorBlogFooter author={data.contentfulBlog.author} />
                <Box pad={{ vertical: "small" }}>
                  <Text as="h2" margin="none" weight={500} size="large">
                    More stories
                  </Text>
                </Box>
                <RelatedBlogs
                  authorSlug={data.contentfulBlog.author.slug}
                  tags={data.contentfulBlog.tags}
                  slug={data.contentfulBlog.slug}
                />
                {/* <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                /> */}
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
          gatsbyImageData(layout: FULL_WIDTH, quality: 50, placeholder: BLURRED)
        }
        slug
      }
      artist {
        fullName
        slug
      }
      createdAt(fromNow: true)
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 50
            )
            description
          }
        }
      }
      titleImage {
        description
        file {
          details {
            size
          }
          url
        }
        gatsbyImageData(layout: FULL_WIDTH, quality: 50, placeholder: BLURRED)
      }
      showCaptions
    }
  }
`
export default BlogTemplate
