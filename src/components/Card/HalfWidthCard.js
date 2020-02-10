import React from "react"
import { Box, Text, Image } from "grommet"
import { CardTitle } from "."
import { CardAnchor } from "./CardTitle"
import { CategoryLink } from ".."
export const HalfWidthCard = ({
  node: { title, author, slug, tags, titleImage, createdAt },
  height,
  ...rest
}) => (
  <Box gap="small" {...rest}>
    <Box gap="medium">
      <CardAnchor to={slug}>
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
        <CategoryLink to={`/categories/${tags}`.toLowerCase()} size="0.8em">
          {tags}
        </CategoryLink>

        <CardTitle slug={slug} title={title} align="center" size="xlarge" />

        <Text size="small" color="dark-2">
          by {author.fullName} — {createdAt}
        </Text>
      </Box>
    </Box>
  </Box>
)
