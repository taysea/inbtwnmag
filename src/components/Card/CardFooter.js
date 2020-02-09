import React from "react"
import { Box, Text } from "grommet"
import { CategoryLink } from ".."

export const CardFooter = ({ author, tags, createdAt }) => (
  <Box flex="grow" justify="end">
    <Text size="xsmall" color="dark-2">
      by {author.fullName} /{" "}
      <CategoryLink to={`/categories/${tags}`.toLowerCase()}>
        {tags}
      </CategoryLink>{" "}
      — {createdAt}
    </Text>
  </Box>
)
