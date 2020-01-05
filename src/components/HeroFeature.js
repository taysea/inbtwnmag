import React from "react"
// import { Link } from "gatsby"
import { Anchor, Box, Grid, Text, Image } from "grommet"
// import { FormNext } from "grommet-icons"
import { CardAnchor } from "./Card/CardTitle"
import { BodyText } from "./Styled"

export const HeroFeature = ({
  node: { title, author, slug, description, tags, titleImage },
}) => (
  <Grid
    rows={["500px", "0px"]}
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
      { name: "heroImage", start: [0, 0], end: [7, 0] },
      { name: "content", start: [7, 0], end: [11, 0] },
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
          <Text weight="bold" size="2.75em">
            {title}
          </Text>
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
