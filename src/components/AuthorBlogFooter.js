import React from "react"
import { Box, Image, Text } from "grommet"
import { AuthorLink } from "."

export const AuthorBlogFooter = ({ author }) => {
  return (
    <Box
      direction="row-responsive"
      gap="medium"
      pad="medium"
      justify="between"
      background={{ color: "background-back", opacity: "strong" }}
      margin={{ vertical: "medium" }}
    >
      <Box gap="medium">
        <Text size="small" color="text-weak">
          Author
        </Text>
        <Box gap="xsmall">
          <Text weight={500}>
            <AuthorLink to={`/author/${author.slug}`} color="text-strong">
              {author.fullName}
            </AuthorLink>
          </Text>
          {author.bio && (
            <Text size="small" style={{ fontFamily: '"Tiempos", serif' }}>
              {author.bio}
            </Text>
          )}
        </Box>
      </Box>
      {author.photo && (
        <Box round="full" width="xsmall" height="xsmall" overflow="hidden">
          <Image
            src={author.photo.file.url}
            alt={author.photo.description}
            fit="cover"
          />
        </Box>
      )}
    </Box>
  )
}
