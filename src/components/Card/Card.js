import React, { useContext } from "react"
import { Link } from "gatsby"
import { Box, Image, ResponsiveContext } from "grommet"
import { BodyText } from "../Styled"
import { CardFooter, CardTitle } from "."

export const Card = ({
  node: { title, author, slug, description, tags, titleImage, createdAt },
  height,
}) => {
  const size = useContext(ResponsiveContext)
  console.log(titleImage)
  return (
    <Box gap="small" margin={{ bottom: "medium" }}>
      <Box gap="small">
        <Link to={`/${slug}`}>
          <Box
            width="100%"
            height={height || "250px"}
            margin={{ bottom: "small" }}
          >
            <Image
              fit="cover"
              alt={titleImage.description}
              src={titleImage.file.url}
              margin="none"
            />
          </Box>
        </Link>
        <CardTitle slug={`/${slug}`} title={title} flex="grow" justify="end" />
      </Box>

      {size !== "small" && <BodyText size="small">{description}</BodyText>}
      <CardFooter author={author} tags={tags} createdAt={createdAt} />
    </Box>
  )
}
