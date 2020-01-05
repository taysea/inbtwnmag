import React from "react"
// import { Link } from "gatsby"
import { Anchor, Box, Text, Image } from "grommet"
import { CardTitle } from "."
import { CardAnchor } from "./CardTitle"

export const HalfWidthCard = ({
  node: { title, author, slug, tags, titleImage },
  height,
  ...rest
}) => (
  <Box gap="small" {...rest}>
    <Box gap="medium">
      <CardAnchor href={slug} color="dark-1">
        <Box width="100%" height={height || "350px"}>
          <Image fit="cover" src={titleImage.file.url} margin="none" />
        </Box>
      </CardAnchor>
      <Box gap="small" align="center">
        <Anchor
          href={`/categories/${tags}`.toLowerCase()}
          size="small"
          color="#00C781"
        >
          {tags}
        </Anchor>

        <CardTitle
          slug={slug}
          title={title}
          align="center"
          textAlign="center"
          level={3}
        />

        <Text size="small" color="dark-3">
          by {author.fullName} — 5 hours ago
        </Text>
      </Box>
    </Box>
  </Box>
)
