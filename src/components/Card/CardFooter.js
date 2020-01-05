import React from "react"
import { Anchor, Box, Text } from "grommet"

export const CardFooter = ({ author, tags }) => (
  <Box flex="grow" justify="end">
    <Text size="xsmall" color="dark-3">
      by {author.fullName} /{" "}
      <Anchor
        href={`/categories/${tags}`.toLowerCase()}
        size="xsmall"
        color="#00C781"
      >
        {tags}
      </Anchor>{" "}
      — 4 hours ago
    </Text>
  </Box>
)
