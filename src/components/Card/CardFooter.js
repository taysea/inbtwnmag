import React from "react"
import { Box, Text } from "grommet"
import { AuthorLink, CategoryLink } from ".."
import { cardTypes } from "."

export const CardFooter = ({ author, tags, createdAt, type }) => (
  <Box flex="grow" justify={type !== cardTypes.minimal ? "end" : "start"}>
    <Text size="xsmall" color="dark-2">
      by{" "}
      <AuthorLink to={`/author/${author.slug}`}>{author.fullName}</AuthorLink> /{" "}
      <CategoryLink to={`/categories/${tags}`.toLowerCase()}>
        {tags}
      </CategoryLink>{" "}
      — {createdAt}
    </Text>
  </Box>
)
