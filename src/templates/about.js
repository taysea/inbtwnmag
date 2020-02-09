import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Anchor, Box, Text } from "grommet"
import { PartialWidthSection } from "../layouts"

const AboutTemplate = () => (
  <Layout>
    <SEO
      title="About"
      description="inbtwn. is an online + print publication exploring the idea
                  that we’re constantly falling into and out of ourselves. Our
                  mission is to highlight art, photography, writing, and fashion
                  through the eyes of those who are making it."
    />
    <PartialWidthSection marginBottom="large">
      <Box width={{ max: "large" }} gap="medium">
        <Box gap="small">
          <Text as="h1" weight="bold" size="xxlarge">
            What is inbtwn. anyway?
          </Text>
          <Text>
            inbtwn. is an online + print publication exploring the idea that
            we’re constantly falling into and out of ourselves. Our mission is
            to highlight art, photography, writing, and fashion through the eyes
            of those who are making it. We find that understanding the thoughts
            of the artist— the intentions of their process— is inspiring. So,
            with this magazine, we want to capture just that. We hope that this
            magazine helps you learn about the talented works of so many artists
            out there and that this publication serves as a piece of art as
            well.
          </Text>
          <Text>
            Interested in contributing? Email us at{" "}
            <Anchor
              target="_blank"
              href="mailto:info@inbtwnmag.com"
              color="#094533"
            >
              info@inbtwnmag.com
            </Anchor>
            !
          </Text>
        </Box>
        <Box gap="small">
          <Text as="h2" weight="bold" size="xlarge" margin={{ bottom: "none" }}>
            The Team
          </Text>
          <Text>Editor-in-Chief: Taylor Seamans</Text>
          <Text>Contributing Photographers: Erin Clifford, Dillon Matthew</Text>
          <Text>
            Contributing Writers: Rennie Skirnovsky, Maxine Flasher-Duzgunes
          </Text>
        </Box>
      </Box>
    </PartialWidthSection>
  </Layout>
)

export default AboutTemplate
