import React from "react"
// import { Link } from "gatsby"
import { Box, Anchor, Button } from "grommet"
import { Instagram, Search } from "grommet-icons"
import { NavItems } from "."

export const Navigation = () => (
  <Box direction="row" gap="medium">
    <Box
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
)
