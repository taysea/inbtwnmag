import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Anchor, Box, Heading, Image, Text, ResponsiveContext } from "grommet"
import { PartialWidthSection } from "../layouts"
import { BodyText } from "../components"
import AboutImage from "../assets/taylor-boma.jpg"

const AboutTemplate = () => {
  const size = useContext(ResponsiveContext)
  return (
    <Layout>
      <SEO
        title="About"
        description="inbtwn. is an online + print publication exploring the idea
                  that we’re constantly falling into and out of ourselves. Our
                  mission is to highlight art, photography, writing, and fashion
                  through the eyes of those who are making it."
      />
      <Box
        height={size !== "small" ? "60vh" : "medium"}
        margin={{ bottom: "large" }}
      >
        <Image
          src={AboutImage}
          alt="Taylor and Boma"
          fit="cover"
          height="100%"
        />
      </Box>
      <PartialWidthSection marginBottom="large">
        <Box width={{ max: "large" }} gap="medium">
          <Box gap="medium">
            <Heading size="small" margin={{ bottom: "medium" }}>
              inbtwn. is an online + print publication exploring the idea that
              we’re constantly falling into and out of ourselves.
            </Heading>
            <BodyText>
              Founded in 2017 as a small summer project, inbtwn. has expanded
              into a publication that features work from artists globally. Over
              the past couple years, inbtwn. has expanded its platforms to
              include print magazines, release parties, and the inbtwn. website.
              While inbtwn. is primarily a publication, these other platforms
              allow us to collaborate more with artists and our readers.
            </BodyText>
            <BodyText>
              The publication and website is put together primarily by founder
              and editor-in-chief, Taylor Seamans. However, she works with
              various friends for photo shoots, interviews, and graphic design.
              We are always open to collaborations or submissions. If you are
              interested in contributing to the magazine, please email us at{" "}
              <Anchor
                target="_blank"
                href="mailto:info@inbtwnmag.com"
                color="#094533"
              >
                info@inbtwnmag.com
              </Anchor>
              .
            </BodyText>
          </Box>
          <Box gap="small">
            <Heading
              level={2}
              size="small"
              weight="bold"
              margin={{ bottom: "none" }}
            >
              The Team
            </Heading>
            <BodyText>Editor-in-Chief: Taylor Seamans</BodyText>
            <BodyText>
              Contributing Photographers: Erin Clifford, Dillon Matthew
            </BodyText>
            <BodyText>
              Contributing Writers: Rennie Skirnovsky, Maxine Flasher-Duzgunes
            </BodyText>
          </Box>
        </Box>
      </PartialWidthSection>
    </Layout>
  )
}

export default AboutTemplate
