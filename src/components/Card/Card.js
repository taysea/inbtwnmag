import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Box } from "grommet"
import { BodyText } from "../Styled"
import { CardFooter, CardTitle } from "."

export const Card = ({
  node: { title, author, slug, description, tags, titleImage, createdAt },
  description: blogDescription,
  height,
}) => {
  return (
    <Box gap="small" margin={{ bottom: "medium" }}>
      <Box gap="small">
        <Link to={`/${slug}`}>
          <Box
            width="100%"
            height={height || "250px"}
            margin={{ bottom: "small" }}
          >
            <Img
              fluid={titleImage.fluid}
              alt={titleImage.description}
              style={{ height: "100%" }}
            />
          </Box>
        </Link>
        <CardTitle slug={`/${slug}`} title={title} flex="grow" justify="end" />
      </Box>

      {blogDescription && <BodyText size="small">{description}</BodyText>}
      <CardFooter author={author} tags={tags} createdAt={createdAt} />
    </Box>
  )
}
