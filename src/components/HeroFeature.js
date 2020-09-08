import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Box, Grid, Text, ResponsiveContext } from "grommet"
import { CardAnchor } from "./Styled"
import { CategoryLink } from "."

export const HeroFeature = ({
  node: { title, author, slug, description, tags, titleImage, createdAt },
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box background="#FFF" margin={{ bottom: "medium" }}>
      <Grid
        rows={["auto", "auto"]}
        columns={size !== "small" ? ["55%", "auto"] : "100%"}
        areas={
          size !== "small"
            ? [["heroImage", "content"]]
            : [
                ["heroImage", "heroImage"],
                ["content", "content"],
              ]
        }
      >
        <Box gridArea="heroImage">
          <Link to={`/${slug}`}>
            <Box width="100%" height={size !== "small" ? "500px" : "250px"}>
              <Img
                fluid={titleImage.fluid}
                alt={titleImage.description}
                style={{ height: "100%" }}
              />
            </Box>
          </Link>
        </Box>
        <Box gridArea="content" pad="medium">
          <Box gap="small" margin={{ bottom: "large" }}>
            <CardAnchor to={`/${slug}`}>
              <Text size={size !== "small" ? "2.5em" : "1.5em"}>{title}</Text>
            </CardAnchor>
            <Text size="small" weight="bold">
              {description}
            </Text>
          </Box>
          <Box flex="grow" justify="end">
            <Text size="xsmall" color="dark-2">
              {/* by{" "}
              <AuthorLink to={`/author/${author.slug}`}>
                {author.fullName}
              </AuthorLink>{" "}
              /{" "} */}
              <CategoryLink to={`/categories/${tags.toLowerCase()}`}>
                {tags}
              </CategoryLink>{" "}
              — {createdAt}
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
