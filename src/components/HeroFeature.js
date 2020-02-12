import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Box, Grid, Text, ResponsiveContext } from "grommet"
import { CardAnchor } from "./Card/CardTitle"
import { CategoryLink } from "."
import { BodyText } from "./Styled"

export const HeroFeature = ({
  node: { title, author, slug, description, tags, titleImage, createdAt },
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Grid
      rows={[size !== "small" ? "500px" : "medium", "auto"]}
      columns={["55%", "auto"]}
      gap="medium"
      areas={
        size !== "small"
          ? [["heroImage", "content"]]
          : [["heroImage", "heroImage"], ["content", "content"]]
      }
    >
      <Box gridArea="heroImage">
        <Link to={`/${slug}`}>
          <Box width="100%" height={size !== "small" ? "500px" : "medium"}>
            <Img
              fluid={titleImage.fluid}
              alt={titleImage.description}
              style={{ height: "100%" }}
            />
          </Box>
        </Link>
      </Box>
      <Box gridArea="content">
        <Box gap="small" margin={{ bottom: "large" }}>
          <CardAnchor to={`/${slug}`}>
            <Text size={size !== "small" ? "2.5em" : "1.5em"}>{title}</Text>
          </CardAnchor>
          <BodyText size="small">{description}</BodyText>
        </Box>
        <Box flex="grow" justify="end">
          <Text size="xsmall" color="dark-2">
            by {author.fullName} /{" "}
            <CategoryLink to={`/categories/${tags.toLowerCase()}`}>
              {tags}
            </CategoryLink>{" "}
            — {createdAt}
          </Text>
        </Box>
      </Box>
    </Grid>
  )
}
