import React, { useContext } from "react"
// import { Link } from "gatsby"
import {
  Anchor,
  Box,
  Grid,
  Heading,
  Text,
  Image,
  ResponsiveContext,
} from "grommet"
// import { FormNext } from "grommet-icons"
import { CardAnchor } from "./Card/CardTitle"
import { BodyText } from "./Styled"

export const HeroFeature = ({
  node: { title, author, slug, description, tags, titleImage },
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Grid
      rows={["500px", "auto"]}
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
        <Anchor href={slug}>
          <Box width="100%" height="500px">
            <Image fit="cover" src={titleImage.file.url} margin="none" />
          </Box>
        </Anchor>
      </Box>
      <Box gridArea="content">
        <Box gap="small" margin={{ bottom: "large" }}>
          <CardAnchor href={slug} color="dark-1">
            <Heading size="xxlarge" margin="none">
              {title}
            </Heading>
          </CardAnchor>
          <BodyText size="small">{description}</BodyText>
        </Box>
        <Box flex="grow" justify="end">
          <Text size="xsmall" color="dark-3">
            by {author.fullName} /{" "}
            <Anchor href={tags.toLowerCase()} color="#00C781">
              {tags}
            </Anchor>{" "}
            — 4 hours ago
          </Text>
        </Box>
      </Box>
    </Grid>
  )
}
