import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Box, Text } from "grommet"

export const CardAnchor = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  :visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline dotted;
    text-decoration-color: #094533;
  }
`
export const CardTitle = ({ slug, title, size, ...rest }) => (
  <CardAnchor to={slug}>
    <Box {...rest}>
      <Text size={size || "large"}>{title}</Text>
    </Box>
  </CardAnchor>
)
