import React from "react"
import { Box, Text } from "grommet"
import { AuthorLink } from ".."
import { cardTypes } from "."

export const CardFooter = ({
  author,
  tags,
  createdAt,
  size,
  type,
  ...rest
}) => (
  <Box
    flex="grow"
    justify={type !== cardTypes.minimal ? "end" : "start"}
    {...rest}
  >
    <Text size={size || "xsmall"} color="dark-2">
      by{" "}
      <AuthorLink to={`/author/${author.slug}`}>{author.fullName}</AuthorLink>{" "}
      {/* <CategoryLink to={`/categories/${tags}`.toLowerCase()}>
        {tags}
      </CategoryLink>{" "} */}
      — {createdAt}
    </Text>
  </Box>
)
