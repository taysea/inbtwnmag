import React, { useContext } from "react"
import { Link } from "gatsby"
import { Box, Header, Image, ResponsiveContext } from "grommet"
import { PartialWidthSection } from "../../layouts/PartialWidth"
import logo from "../../../src/images/inbtwn.png"
import { MobileNav, Nav } from "."

export const NavBar = ({ isLanding, ...rest }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box {...rest}>
      <PartialWidthSection marginBottom="none">
        {size !== "small" ? (
          <Header pad={{ vertical: "medium" }}>
            <Link to="/">
              <Box width="175px" height="xxsmall" overflow="hidden">
                <Image src={logo} alt="inbtwn." fit="contain" />
              </Box>
            </Link>
            <Nav />
          </Header>
        ) : (
          <Header height="xsmall">
            <Link to="/">
              <Box width="125px" height="xxsmall" overflow="hidden">
                <Image src={logo} alt="inbtwn." fit="contain" />
              </Box>
            </Link>
            <MobileNav />
          </Header>
        )}
      </PartialWidthSection>
    </Box>
  )
}
