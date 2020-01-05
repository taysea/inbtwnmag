import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Anchor, Box, Image } from "grommet"
import { BodyText } from "../Styled"
import { CardFooter, CardTitle } from "."

export const CardAnchor = styled(Anchor)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ef777e;
  }
`
export const Card = ({
  node: { title, author, slug, description, tags, titleImage },
  height,
}) => (
  <Box gap="small" margin={{ bottom: "medium" }}>
    <Box gap="small">
      <CardAnchor href={slug} margin={{ bottom: "small" }}>
        <Box width="100%" height={height || "250px"}>
          <Image fit="cover" src={titleImage.file.url} margin="none" />
        </Box>
      </CardAnchor>
      <CardTitle slug={slug} title={title} flex="grow" justify="end" />
    </Box>

    <BodyText size="small">{description}</BodyText>
    <CardFooter author={author} tags={tags} />
  </Box>
)
