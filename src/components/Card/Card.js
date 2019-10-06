import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Anchor, Box, Heading, Text, Image } from "grommet"
import { BodyText } from "../Styled"
import { CardImage, CardTitle, Category, Description } from "."

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
  }
`
export const Card = ({
  node: { title, author, slug, description, tags, titleImage },
  height,
}) => (
  <Box gap="small" margin={{ bottom: "medium" }}>
    <Box gap="small">
      <CardAnchor href={slug} color="dark-1">
        <Box width="100%" height={height || "250px"}>
          <Image fit="cover" src={titleImage.file.url} margin="none" />
        </Box>
      </CardAnchor>
      <Text size="small">
        Blog /{" "}
        <Anchor
          href={`/categories/${tags}`.toLowerCase()}
          size="small"
          color="#EF777E"
        >
          {tags}
        </Anchor>
      </Text>
      <CardAnchor color="dark-1" href={slug}>
        <Heading level={3} margin="none">
          {title}
        </Heading>
      </CardAnchor>
    </Box>

    <BodyText size="small">{description}</BodyText>
    <Box flex="grow" justify="end">
      <Text size="small" weight="bold" color="dark-5">
        {author.fullName}
      </Text>
    </Box>
  </Box>
)
