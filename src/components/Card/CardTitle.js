import React from "react"
import styled from "styled-components"
import { Anchor, Box, Heading } from "grommet"

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ef777e;
  }
`
export const CardTitle = ({ slug, title, level, textAlign, ...rest }) => (
  <Box {...rest}>
    <CardAnchor href={slug} color="dark-1">
      <Heading
        level={level || 2}
        margin="none"
        size="xsmall"
        textAlign={textAlign}
      >
        {title}
      </Heading>
    </CardAnchor>
  </Box>
)
