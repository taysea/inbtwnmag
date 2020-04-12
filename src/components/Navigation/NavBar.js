import React, { useContext } from "react"
import { Link } from "gatsby"
import { Box, Header, Image, ResponsiveContext } from "grommet"
import { PartialWidthSection } from "../../layouts/PartialWidth"
import logo from "../../../src/images/inbtwn.png"
import { MobileNav, Nav } from "."

export const NavBar = ({ ...rest }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box {...rest}>
      <PartialWidthSection marginBottom="none">
        <Header height="xsmall">
          <Link to="/">
            <Box width="125px" height="xxsmall" overflow="hidden">
              <Image src={logo} alt="inbtwn." fit="contain" />
            </Box>
          </Link>
          {size !== "small" ? <Nav /> : <MobileNav />}
        </Header>
      </PartialWidthSection>
    </Box>
  )
}
