import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Box, Button, Grid, Text, ResponsiveContext, Stack } from "grommet"
import { CardAnchor } from "./Styled"
import { CategoryLink } from "."
import { PartialWidthSection } from "../layouts"
import { LinkNext } from "grommet-icons"

export const HeroFeature = ({
  node: { title, author, slug, description, tags, titleImage, createdAt },
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box margin={{ bottom: "medium" }}>
      <Stack guidingChild="last">
        <Box width="100%" height="100%" overflow="hidden">
          <Img
            fluid={titleImage.fluid}
            alt={titleImage.description}
            style={{ height: "100%" }}
          />
        </Box>
        <PartialWidthSection justify="center">
          <Grid
            rows={["auto", "auto"]}
            columns={size !== "small" ? ["55%", "auto"] : "100%"}
            areas={
              size !== "small"
                ? [["content", "heroImage"]]
                : [
                    ["heroImage", "heroImage"],
                    ["content", "content"],
                  ]
            }
            margin={{ vertical: "large" }}
          >
            <Box gridArea="heroImage">
              {/* <Link to={`/${slug}`}>
            <Box width="100%" height={size !== "small" ? "500px" : "250px"}>
              <Img
                fluid={titleImage.fluid}
                alt={titleImage.description}
                style={{ height: "100%" }}
              />
            </Box>
          </Link> */}
            </Box>
            <Box gridArea="content" pad="medium" background="white">
              <Box align="start" gap="small" margin={{ bottom: "large" }}>
                <CardAnchor to={`/${slug}`}>
                  <Text
                    as="h2"
                    size={size !== "small" ? "3rem" : "1.5em"}
                    weight={500}
                    margin="none"
                  >
                    {title}
                  </Text>
                </CardAnchor>
                <Text weight={500} style={{ fontFamily: '"Tiempos", serif' }}>
                  {description}
                </Text>
                <Link to={`/${slug}`}>
                  <Button
                    label="Read story"
                    icon={<LinkNext size="18px" color="#000" />}
                    reverse
                  />
                </Link>
              </Box>

              <Box flex="grow" justify="end">
                <Text size="xsmall" color="dark-2">
                  {/* by{" "}
              <AuthorLink to={`/author/${author.slug}`}>
                {author.fullName}
              </AuthorLink>{" "}
              /{" "} */}
                  <CategoryLink to={`/categories/${tags.toLowerCase()}`}>
                    {tags}
                  </CategoryLink>{" "}
                  — {createdAt}
                </Text>
              </Box>
            </Box>
          </Grid>
        </PartialWidthSection>
      </Stack>
    </Box>
  )
}
