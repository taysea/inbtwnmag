import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Box, Button } from "grommet"
import { Instagram } from "grommet-icons"
import { NavItems } from "."

const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 0.75em;
  text-decoration: none;
  color: #111;
  &:hover {
    text-decoration: underline;
  }
`

export const Nav = () => (
  <Box direction="row" gap="small">
    <Box
      align="center"
      direction="row"
      gap="medium"
      border={{ side: "right", color: "light-5" }}
      pad={{ right: "medium" }}
    >
      {NavItems.map(item => (
        <NavLink key={item} to={`/categories/${item.toLowerCase()}`}>
          {item}
        </NavLink>
      ))}
    </Box>
    <Button
      a11yTitle="Instagram"
      icon={<Instagram size="1.25em" color="dark-1" />}
      href="https://www.instagram.com/inbtwnmag/"
      target="_blank"
    />
    {/* <Button a11yTitle="Search" icon={<Search size="1.25em" color="dark-1" />} /> */}
  </Box>
)
