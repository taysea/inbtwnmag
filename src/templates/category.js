import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { Box, Heading } from "grommet"

function CategoryTemplate() {
  return (
    <Layout>
      <Box>hi</Box>
    </Layout>
  )
}

// export const query = graphql`
//   query categoryQuery($tags: String!) {
//     allContentfulBlog(filter: { tags: { eq: $tags } }) {
//       edges {
//         node {
//           title
//           author {
//             fullName
//           }
//         }
//       }
//     }
//   }
// `
export default CategoryTemplate
