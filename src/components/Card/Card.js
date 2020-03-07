import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Box, Text } from "grommet"
import { BodyText } from "../Styled"
import { CardFooter, CardTitle } from "."
import { AuthorLink, CategoryLink } from "../Links"
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
      <Box gap="small" {...rest}>
        <Box gap="medium">
          <CardAnchor to={slug}>
            <Box width="100%" height={height || "350px"}>
              <Img
                fluid={titleImage.fluid}
                alt={titleImage.description}
                style={{ height: "100%" }}
              />
            </Box>
          </CardAnchor>
          <Box gap="small" align="center">
            <CategoryLink to={`/categories/${tags}`.toLowerCase()} size="0.8em">
              {tags}
            </CategoryLink>
            <CardTitle
              slug={slug}
              title={title}
              textAlign="center"
              size="xlarge"
            />
            <Text size="small" color="dark-2">
              by{" "}
              <AuthorLink to={`/author/${author.slug}`}>
                {author.fullName}
              </AuthorLink>{" "}
              — {createdAt}
            </Text>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box gap="small" margin={{ bottom: "medium" }}>
      <Box gap="small">
        <Box margin={{ bottom: "small" }}>
          <Link to={`/${slug}`}>
            <Box width="100%" height={height || "250px"}>
              <Img
                fluid={titleImage.fluid}
                alt={titleImage.description}
                style={{ height: "100%" }}
              />
            </Box>
          </Link>
        </Box>
        <CardTitle
          slug={`/${slug}`}
          title={title}
          flex="grow"
          justify="start"
        />
      </Box>

      {type !== cardTypes.minimal && (
        <BodyText size="small">{description}</BodyText>
      )}
      <CardFooter
        author={author}
        tags={tags}
        createdAt={createdAt}
        type={type}
      />
    </Box>
  )
}
