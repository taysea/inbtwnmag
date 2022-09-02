import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Anchor, Box, Text } from "grommet"
// import { Instagram } from "grommet-icons"
import { NavItems } from "."

const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 0.8em;
  text-decoration: none;
  color: #111;
  &:hover {
    text-decoration: none;
  }
`

const StyledAnchor = styled(Anchor)`
  font-weight: bold;
  font-size: 0.8em;
  text-decoration: none;
  color: #111;
  &:hover {
    text-decoration: none;
    color: #8f37fe;
  }
`

const NavButton = ({ item }) => {
  const [color, setColor] = useState("text")

  return (
    <Box
      onMouseOver={() => setColor("#8F37FE")}
      onFocus={() => {}}
      onMouseOut={() => setColor("text")}
      onBlur={() => {}}
    >
      <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
        <Text size="small" weight="bold" color={color}>
          {item}
        </Text>
      </Box>
    </Box>
  )
}
export const Nav = () => {
  return (
    <Box direction="row" gap="small">
      <Box align="center" direction="row" gap="medium">
        {NavItems.map(
          item =>
            item !== "Cart" &&
            item !== "Magazine" && (
              <NavLink
                key={item}
                to={
                  item !== "About" && item !== "Shop"
                    ? `/categories/${item.toLowerCase()}`
                    : `/${item.toLowerCase()}`
                }
              >
                <NavButton item={item} />
              </NavLink>
            )
        )}
        <StyledAnchor
          label="Magazine"
          href="https://issuu.com/inbtwnmag"
          target="_blank"
          rel="noopener"
        />
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
}
