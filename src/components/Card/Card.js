import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"
import { Box, Stack, Text } from "grommet"
// import { BodyText } from "../Styled"
import { CardFooter, CardTitle } from "."
import { CardAnchor } from "../Styled"

export const cardTypes = {
  halfWidth: "half-width",
  minimal: "minimal",
}

export const Card = ({
  node: { title, author, slug, description, tags, titleImage, createdAt },
  height,
  type,
  ...rest
}) => {
  if (type === cardTypes.halfWidth) {
    return (
      // <Box gap="small" background="#FFF" {...rest}>
      //   <Box gap="medium">
      //     <CardAnchor to={slug}>
      //       <Box width="100%" height={height || "350px"}>
      //         <Img
      //           fluid={titleImage.fluid}
      //           alt={titleImage.description}
      //           style={{ height: "100%" }}
      //         />
      //       </Box>
      //     </CardAnchor>
      //     <Box
      //       gap="small"
      //       align="center"
      //       pad={{ horizontal: "medium", bottom: "medium" }}
      //     >
      //       <CategoryLink to={`/categories/${tags}`.toLowerCase()} size="0.8em">
      //         {tags}
      //       </CategoryLink>
      //       <CardTitle
      //         slug={slug}
      //         title={title}
      //         textAlign="center"
      //         size="xlarge"
      //       />
      //       <Text size="small" color="dark-2">
      //         by{" "}
      //         <AuthorLink to={`/author/${author.slug}`}>
      //           {author.fullName}
      //         </AuthorLink>{" "}
      //         — {createdAt}
      //       </Text>
      //     </Box>
      //   </Box>
      // </Box>
      <CardAnchor to={slug}>
        <Box gap="small" background="#FFF" {...rest}>
          <Stack>
            <Box width="100%" height={height || "350px"}>
              <Img
                fluid={titleImage.fluid}
                alt={titleImage.description}
                style={{ height: "100%" }}
              />
            </Box>
            <Box
              background={{ color: "#000", opacity: 0.5 }}
              gap="small"
              align="center"
              justify="center"
              pad="medium"
              fill
            >
              <Text
                color="#FFF"
                to={`/categories/${tags}`.toLowerCase()}
                size="0.8em"
              >
                {tags}
              </Text>
              <Text color="#FFF" size="xlarge" textAlign="center">
                {title}
              </Text>
              <Text color="#FFF" size="small">
                {createdAt}
              </Text>
            </Box>
          </Stack>
        </Box>
      </CardAnchor>
    )
  }

  return (
    <Box gap="small" margin={{ bottom: "medium" }} background="#FFF">
      <CardAnchor to={slug}>
        <Box gap="small">
          <Box gap="small">
            <Box margin={{ bottom: "small" }}>
              {/* <Link to={`/${slug}`}> */}
              <Box width="100%" height={height || "250px"}>
                <Img
                  fluid={titleImage.fluid}
                  alt={titleImage.description}
                  style={{ height: "100%" }}
                />
              </Box>
              {/* </Link> */}
            </Box>
            <Box>
              {/* <Box>
            <CategoryLink to={`/categories/${tags}`.toLowerCase()} size="small">
              {tags}
            </CategoryLink>
          </Box> */}
              <CardTitle
                slug={`/${slug}`}
                title={title}
                flex="grow"
                justify="start"
                // pad={{ horizontal: "medium" }}
              />
            </Box>
          </Box>

          {type !== cardTypes.minimal && (
            <Box>
              <Text size="small" weight={500}>
                {description}
              </Text>
            </Box>
          )}
        </Box>
      </CardAnchor>
      <CardFooter
        author={author}
        tags={tags}
        createdAt={createdAt}
        type={type}
        // pad={{ horizontal: "medium", bottom: "medium" }}
      />
    </Box>
  )
}
