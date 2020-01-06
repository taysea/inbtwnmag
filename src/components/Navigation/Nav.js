import React from "react"
// import { Link } from "gatsby"
import { Box, Anchor, Button } from "grommet"
import { Instagram, Search } from "grommet-icons"
import { NavItems } from "."

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
        <Anchor
          key={item}
          size="small"
          color="dark-1"
          href={`/categories/${item.toLowerCase()}`}
        >
          {item}
        </Anchor>
      ))}
    </Box>
    <Box border={{ side: "right", color: "light-5" }} pad={{ right: "small" }}>
      <Button
        a11yTitle="Instagram"
        icon={<Instagram size="1.25em" color="dark-1" />}
        href="https://www.instagram.com/inbtwnmag/"
        target="_blank"
      />
    </Box>
    <Button a11yTitle="Search" icon={<Search size="1.25em" color="dark-1" />} />
  </Box>
)
