import React from "react"
import styled from "styled-components"
import { Anchor, Box, Image } from "grommet"

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
  }
`
export const CardImage = (slug, height, url) => (
  <CardAnchor href={slug} color="dark-1">
    <Box width="100%" height={height || "250px"}>
      <Image fit="cover" src={console.log(url) || url} margin="none" />
    </Box>
  </CardAnchor>
)
