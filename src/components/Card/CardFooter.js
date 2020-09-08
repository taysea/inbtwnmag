import React from "react"
import { Box, Text } from "grommet"
import { AuthorLink } from ".."
import { cardTypes } from "."
import { CategoryLink } from "../Links"

export const CardFooter = ({
  artist,
  author,
  blog,
  tags,
  createdAt,
  size,
  type,
  ...rest
}) => (
  <Box
    // flex="grow"
    justify={type !== cardTypes.minimal ? "end" : "start"}
    gap="xsmall"
    align={artist && "center"}
    {...rest}
  >
    <Text size={size || "xsmall"} color="dark-2">
      {blog ? (
        <AuthorLink to={`/author/${author.slug}`}>{author.fullName}</AuthorLink>
      ) : (
        <CategoryLink to={`/categories/${tags}`.toLowerCase()}>
          {tags}
        </CategoryLink>
      )}
      {" — "}
      {createdAt}
    </Text>
    {artist && (
      <Text size={size || "xsmall"} color="dark-2">
        artwork by{" "}
        <AuthorLink to={`/artist/${artist.slug}`}>{artist.fullName}</AuthorLink>
      </Text>
    )}
  </Box>
)
