import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Anchor, Box, Heading, Text, Image } from "grommet"
import { BodyText } from "./Styled"

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
  }
`
export const HalfWidthCard = ({
  node: { title, author, slug, description, tags, titleImage },
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
        <Text size="small" textAlign="center">
          Blog /{" "}
          <Anchor
            href={`/categories/${tags}`.toLowerCase()}
            size="small"
            color="#EF777E"
          >
            {tags}
          </Anchor>
        </Text>
        <CardAnchor color="dark-1" href={slug}>
          <Heading size="medium" level={2} margin="none" textAlign="center">
            {title}
          </Heading>
        </CardAnchor>
      </Box>
    </Box>
  </Box>
)
