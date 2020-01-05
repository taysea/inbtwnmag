import React from "react"
// import { Link } from "gatsby"
import { Box, Anchor, Button, Header, Image } from "grommet"
import { PartialWidthSection } from "../sections/PartialWidth"
import { Instagram, Search } from "grommet-icons"
import logo from "../assets/inbtwn.png"

export const Navigation = () => (
  <Box border={{ side: "bottom", color: "light-3" }}>
    <PartialWidthSection marginBottom="none">
      <Header height="xsmall">
        <Anchor href="/">
          <Box width="125px">
            <Image src={logo} alt="inbtwn." fit="contain" margin="none" />
          </Box>
        </Anchor>
        <Box direction="row" gap="medium">
          <Box
            direction="row"
            gap="medium"
            border={{ side: "right", color: "light-5" }}
            pad={{ right: "medium" }}
          >
            <Anchor size="small" color="dark-1" href="/categories/photography">
              Photography
            </Anchor>
            <Anchor size="small" color="dark-1" href="/categories/art">
              Art
            </Anchor>
            <Anchor size="small" color="dark-1" href="/categories/music">
              Music
            </Anchor>
            <Anchor size="small" color="dark-1" href="/categories/fashion">
              Fashion
            </Anchor>
            <Anchor size="small" color="dark-1" href="/categories/stories">
              Stories
            </Anchor>
            <Anchor size="small" color="dark-1">
              Shop
            </Anchor>
          </Box>
          <Box
            direction="row"
            gap="medium"
            border={{ side: "right", color: "light-5" }}
            pad={{ right: "medium" }}
          >
            <Button icon={<Instagram size="1.25em" color="dark-1" />} plain />
          </Box>
          <Button icon={<Search size="1.25em" color="dark-1" />} plain />
        </Box>
      </Header>
    </PartialWidthSection>
  </Box>
)
