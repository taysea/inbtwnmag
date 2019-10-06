import React from "react"
// import { Link } from "gatsby"
import { Anchor, Box, Grid, Heading, Text, Image } from "grommet"
import { FormNext } from "grommet-icons"
import { CardAnchor } from "./Card/Card"
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
      <CardAnchor href={slug}>
        <Box width="100%" height="500px">
          <Image fit="cover" src={titleImage.file.url} margin="none" />
        </Box>
      </CardAnchor>
    </Box>
    <Box gridArea="content">
      <Box gap="small" margin={{ bottom: "large" }}>
        <Text size="small">
          Blog /{" "}
          <Anchor href={tags.toLowerCase()} size="small" color="#EF777E">
            {tags}
          </Anchor>
        </Text>

        <CardAnchor href={slug} color="dark-1">
          <Heading level={1} margin="none">
            {title}
          </Heading>
        </CardAnchor>
        <BodyText size="small">{description}</BodyText>
        <Text size="small" weight="bold">
          by {author.fullName}
        </Text>
      </Box>
      <Anchor color="#EF777E" size="small">
        <Box direction="row" align="center">
          <Text size="small">Read the interview</Text>
          <FormNext color="#EF777E" />
        </Box>
      </Anchor>
    </Box>
  </Grid>
)
