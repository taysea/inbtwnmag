import React, { useContext } from "react"
import { Link } from "gatsby"
import { Box, Grid, Text, Image, ResponsiveContext } from "grommet"
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
      columns={[
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
        "auto",
      ]}
      gap="medium"
      areas={[
        {
          name: "heroImage",
          start: [0, 0],
          end: size !== "small" ? [7, 0] : [11, 0],
        },
        {
          name: "content",
          start: size !== "small" ? [7, 0] : [0, 1],
          end: size !== "small" ? [11, 0] : [11, 1],
        },
      ]}
    >
      <Box gridArea="heroImage">
        <Link to={`${slug}`}>
          <Box width="100%" height={size !== "small" ? "500px" : "medium"}>
            <Image
              alt={titleImage.description}
              fit="cover"
              src={titleImage.file.url}
              margin="none"
            />
          </Box>
        </Link>
      </Box>
      <Box gridArea="content">
        <Box gap="small" margin={{ bottom: "large" }}>
          <CardAnchor to={slug}>
            <Text size="2.5em">{title}</Text>
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
