import React from "react"
import { Anchor, Box, Text, Image } from "grommet"
import { CardTitle } from "."
import { CardAnchor } from "./CardTitle"

export const HalfWidthCard = ({
  node: { title, author, slug, tags, titleImage, createdAt },
  height,
  ...rest
}) => (
  <Box gap="small" {...rest}>
    <Box gap="medium">
      <CardAnchor href={slug} color="dark-1">
        <Box width="100%" height={height || "350px"}>
          <Image
            alt={titleImage.description}
            fit="cover"
            src={titleImage.file.url}
            margin="none"
          />
        </Box>
      </CardAnchor>
      <Box gap="small" align="center">
        <Anchor
          href={`/categories/${tags}`.toLowerCase()}
          size="small"
          color="#094533"
        >
          {tags}
        </Anchor>

        <CardTitle slug={slug} title={title} align="center" size="xlarge" />

        <Text size="small" color="dark-2">
          by {author.fullName} — {createdAt}
        </Text>
      </Box>
    </Box>
  </Box>
)
