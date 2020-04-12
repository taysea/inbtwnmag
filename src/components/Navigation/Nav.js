import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Box, Button, Text } from "grommet"
// import { Instagram } from "grommet-icons"
import { NavItems } from "."

const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 0.8em;
  text-decoration: none;
  color: #111;
  &:hover {
    text-decoration: underline;
  }
`

export const Nav = () => (
  <Box direction="row" gap="small">
    <Box align="center" direction="row" background="#EAEAEA">
      {NavItems.map(item => (
        <NavLink
          key={item}
          to={
            item !== "About"
              ? `/categories/${item.toLowerCase()}`
              : `/${item.toLowerCase()}`
          }
        >
          <Button hoverIndicator="#8F37FE">
            <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
              <Text size="small" weight="bold">
                {item}
              </Text>
            </Box>
          </Button>
        </NavLink>
      ))}
    </Box>
    {/* <Button
      a11yTitle="Instagram"
      icon={<Instagram size="1.25em" color="dark-1" />}
      href="https://www.instagram.com/inbtwnmag/"
      target="_blank"
      rel="noopener noreferrer"
    /> */}
    {/* <Button a11yTitle="Search" icon={<Search size="1.25em" color="dark-1" />} /> */}
  </Box>
)
