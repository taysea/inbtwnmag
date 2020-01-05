import React from "react"
import { Box, Heading } from "grommet"
import { CardAnchor } from "./Card"

export const CardTitle = ({ slug, title, level, textAlign, ...rest }) => (
  <Box {...rest}>
    <CardAnchor href={slug} color="dark-1">
      <Heading level={level || 4} margin="none" textAlign={textAlign}>
        {title}
      </Heading>
    </CardAnchor>
  </Box>
)
