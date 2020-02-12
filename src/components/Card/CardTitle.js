import React from "react"
import { Box, Text } from "grommet"
import { CardAnchor } from "../Styled"

export const CardTitle = ({ slug, title, size, ...rest }) => (
  <CardAnchor to={slug}>
    <Box>
      <Text size={size || "large"} {...rest}>
        {title}
      </Text>
    </Box>
  </CardAnchor>
)
