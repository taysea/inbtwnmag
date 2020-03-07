import React from "react"
import { Box, Image, Text } from "grommet"
import { AuthorLink } from "."

export const AuthorBlogFooter = ({ author }) => {
  return (
    <Box direction="row-responsive" gap="medium">
      {author.photo && (
        <Box round="full" width="xsmall" height="xsmall" overflow="hidden">
          <Image
            src={author.photo.file.url}
            alt={author.photo.description}
            fit="cover"
          />
        </Box>
      )}
      <Box gap="small">
        <Text weight="bold">
          by{" "}
          <AuthorLink to={`/author/${author.slug}`} color="#222">
            {author.fullName}
          </AuthorLink>
        </Text>
        {author.bio && <Text>{author.bio}</Text>}
      </Box>
    </Box>
  )
}
