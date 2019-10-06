import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Anchor, Box, Heading, Image, Text } from "grommet"
import { PartialWidthSection } from "../sections/PartialWidth"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { BodyText } from "../components/Styled"

const Bold = ({ children }) => (
  <Text weight="bold" color="dark-1">
    {children}
  </Text>
)

function BlogTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulBlog.seo.title}
        description={data.contentfulBlog.seo.description}
      />
      <Box height="500px" margin={{ bottom: "medium" }}>
        <Image src={data.contentfulBlog.titleImage.file.url} fit="cover" />
      </Box>
      <PartialWidthSection direction="row">
        <Box width="large" margin="auto">
          <Box gap="small" margin={{ bottom: "medium" }}>
            <Text size="small">
              Blog /{" "}
              <Anchor
                href={`/categories/${data.contentfulBlog.tags}`.toLowerCase()}
                size="small"
                color="#EF777E"
              >
                {data.contentfulBlog.tags}
              </Anchor>
            </Text>
            <Heading level={1} margin="none">
              {data.contentfulBlog.title}
            </Heading>
            <Text size="small">
              words by {data.contentfulBlog.author.fullName}
            </Text>
          </Box>
          <BodyText>
            {documentToReactComponents(data.contentfulBlog.body.json, {
              renderMark: {
                [MARKS.BOLD]: text => <Bold>{text}</Bold>,
              },
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                  <Box>
                    <Image
                      src={node.data.target.fields.file["en-US"].url}
                      fit="cover"
                    />
                  </Box>
                ),
              },
            })}
          </BodyText>
          <Box gap="medium">
            {data.contentfulBlog.assets &&
              data.contentfulBlog.assets.map(({ file: { url } }) => (
                <Box height="large">
                  <Image src={url} fit="cover" />
                </Box>
              ))}
          </Box>
          <Box flex="grow" />
        </Box>
      </PartialWidthSection>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      tags
      seo {
        title
        description
      }
      author {
        fullName
        slug
      }
      createdAt
      body {
        json
      }
      titleImage {
        file {
          url
        }
      }
      assets {
        file {
          url
        }
      }
    }
  }
`
export default BlogTemplate
