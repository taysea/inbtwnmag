import React from "react"
import { Box, Footer as GrommetFooter } from "grommet"

export const Footer = () => {
  return (
    <GrommetFooter background="dark-1" height="small">
      <Box width="xlarge" margin="auto">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Box>
    </GrommetFooter>
  )
}
