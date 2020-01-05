import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Anchor, Box, Heading, Text, Image } from "grommet"
import { CardTitle } from "."
import { BodyText } from "../Styled"

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ef777e;
  }
`
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
      <Box gap="small">
        <Text textAlign="center">
          <Anchor
            href={`/categories/${tags}`.toLowerCase()}
            size="small"
            color="#00C781"
          >
            {tags}
          </Anchor>
        </Text>

        <CardTitle
          slug={slug}
          title={title}
          align="center"
          level={3}
          textAlign="center"
        />

        <Text size="small" textAlign="center" color="dark-3">
          by {author.fullName} — 5 hours ago
        </Text>
      </Box>
    </Box>
  </Box>
)
