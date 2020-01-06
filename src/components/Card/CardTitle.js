import React from "react"
import styled from "styled-components"
import { Anchor, Box, Text } from "grommet"

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ef777e;
  }
`
export const CardTitle = ({ slug, title, size, ...rest }) => (
  <Box {...rest}>
    <CardAnchor href={slug} color="dark-1">
      <Text size={size || "large"}>{title}</Text>
    </CardAnchor>
  </Box>
)
