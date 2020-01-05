import React, { useContext } from "react"
// import { Link } from "gatsby"
import { Anchor, Box, Image, ResponsiveContext } from "grommet"
import { BodyText } from "../Styled"
import { CardFooter, CardTitle } from "."

export const Card = ({
  node: { title, author, slug, description, tags, titleImage },
  height,
}) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box gap="small" margin={{ bottom: "medium" }}>
      <Box gap="small">
        <Anchor href={slug} margin={{ bottom: "small" }}>
          <Box width="100%" height={height || "250px"}>
            <Image fit="cover" src={titleImage.file.url} margin="none" />
          </Box>
        </Anchor>
        <CardTitle slug={slug} title={title} flex="grow" justify="end" />
      </Box>

      {size !== "small" && <BodyText size="small">{description}</BodyText>}
      <CardFooter author={author} tags={tags} />
    </Box>
  )
}
