import React from "react"
import { Anchor, Box, Footer as GrommetFooter, Text } from "grommet"
import { PartialWidthSection } from "../layouts"

export const Footer = () => {
  const textSize = "small"
  return (
    <Box
      background="dark-1"
      pad={{ top: "xlarge", bottom: "medium" }}
      margin={{ top: "medium" }}
    >
      <PartialWidthSection marginBottom="none">
        <GrommetFooter direction="row-responsive" align="end">
          <Text size={textSize}>&copy; 2020 inbtwn. Magazine</Text>
          <Box direction="row" gap="large" align="start">
            <Box gap="xsmall">
              <Text size={textSize}>Get the magazine</Text>
              <Anchor
                size={textSize}
                color="white"
                href="https://issuu.com/inbtwnmag"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read issues digitally
              </Anchor>
              <Anchor
                size={textSize}
                color="white"
                href="https://www.magcloud.com/user/inbtwnmag"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase prints
              </Anchor>
            </Box>
            <Box gap="xsmall">
              <Text size={textSize}>Contact Information</Text>
              <Anchor
                size={textSize}
                color="white"
                href="mailto:info@inbtwnmag.com"
              >
                info@inbtwnmag.com
              </Anchor>
            </Box>
          </Box>
        </GrommetFooter>
      </PartialWidthSection>
    </Box>
  )
}
