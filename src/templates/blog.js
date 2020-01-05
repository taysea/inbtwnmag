import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Image, Text } from "grommet"
import { PartialWidthSection } from "../layouts"
import { CardFooter } from "../components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { BodyText } from "../components/Styled"

// const Bold = ({ children }) => (
//   <Text weight="bold" color="#222">
//     {children}
//   </Text>
// )

function BlogTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulBlog.seo.title}
        description={data.contentfulBlog.seo.description}
      />
      <PartialWidthSection pad={{ top: "medium" }} marginBottom="large">
        <Box width="large" gap="small" margin="auto" pad={{ top: "medium" }}>
          <Box gap="medium" align="center">
            <Text weight="bold" size="2.5em" textAlign="center">
              {data.contentfulBlog.title}
            </Text>
            <CardFooter
              author={data.contentfulBlog.author}
              tags={data.contentfulBlog.tags}
            />
          </Box>
        </Box>
      </PartialWidthSection>
      <Box height="80vh" margin={{ bottom: "medium" }}>
        <Image src={data.contentfulBlog.titleImage.file.url} fit="cover" />
      </Box>
      <PartialWidthSection>
        <Box width="large" gap="small" margin="auto">
          <BodyText>
            {documentToReactComponents(data.contentfulBlog.body.json, {
              // renderMark: {
              //   [MARKS.BOLD]: text => <Bold>{text}</Bold>,
              // },
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
        </Box>
      </PartialWidthSection>
      <Box height="30em" background="light-3" />
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
    }
  }
`
export default BlogTemplate
