import React, { useContext } from "react"
// import { Link } from "gatsby"
import { Box, Anchor, Header, Image, ResponsiveContext } from "grommet"
import { PartialWidthSection } from "../../layouts/PartialWidth"
import logo from "../../assets/inbtwn.png"
import { MobileNav, Nav } from "."

export const NavBar = () => {
  const size = useContext(ResponsiveContext)
  return (
    <Box
      border={{ side: "bottom", color: "light-3" }}
      margin={{ bottom: "large" }}
    >
      <PartialWidthSection marginBottom="none">
        <Header height="xsmall">
          <Anchor href="/">
            <Box width="125px">
              <Image src={logo} alt="inbtwn." fit="contain" margin="none" />
            </Box>
          </Anchor>
          {size !== "small" ? <Nav /> : <MobileNav />}
        </Header>
      </PartialWidthSection>
    </Box>
  )
}
