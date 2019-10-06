import React from "react"
// import { Link } from "gatsby"
import { Box, Anchor, Image } from "grommet"
import { PartialWidthSection } from "../sections/PartialWidth"
import logo from "../assets/inbtwn.png"

export const Navigation = () => (
  <PartialWidthSection marginBottom="none">
    <Box justify="between" align="center" direction="row" height="xsmall">
      <Anchor href="/">
        <Box width="150px">
          <Image src={logo} alt="inbtwn." fit="contain" margin="none" />
        </Box>
      </Anchor>
      <Box direction="row" gap="medium">
        <Anchor size="small" color="dark-1">
          Features
        </Anchor>
        <Anchor size="small" color="dark-1" href="/topics/photography">
          Photography
        </Anchor>
        <Anchor size="small" color="dark-1">
          Music
        </Anchor>
        <Anchor size="small" color="dark-1">
          Illustration
        </Anchor>
        <Anchor size="small" color="dark-1">
          Writing
        </Anchor>
        <Anchor size="small" color="dark-1">
          Shop
        </Anchor>
      </Box>
    </Box>
  </PartialWidthSection>
)
