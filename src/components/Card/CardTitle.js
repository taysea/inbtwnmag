import React from "react"
import { Box, Text } from "grommet"
// import { CardAnchor } from "../Styled"

export const CardTitle = ({ pad, slug, title, size, ...rest }) => (
  // <CardAnchor to={slug}>
  <Box pad={pad}>
    <Text
      as="h2"
      margin="none"
      size={size || "large"}
      {...rest}
      wordBreak="break-word"
      weight={500}
    >
      {title}
    </Text>
  </Box>
  // </CardAnchor>
)
