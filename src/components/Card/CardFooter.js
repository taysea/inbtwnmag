import React from "react"
import { Anchor, Box, Text } from "grommet"

export const CardFooter = ({ author, tags }) => (
  <Box flex="grow" justify="end">
    <Text size="xsmall" color="dark-2">
      by {author.fullName} /{" "}
      <Anchor
        href={`/categories/${tags}`.toLowerCase()}
        size="xsmall"
        color="#094533"
      >
        {tags}
      </Anchor>{" "}
      — 4 hours ago
    </Text>
  </Box>
)
