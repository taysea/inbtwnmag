import React from "react"
import { Anchor, Box, Footer as GrommetFooter, Text } from "grommet"
import { PartialWidthSection } from "../layouts"

export const Footer = () => {
  return (
    <Box background="dark-1" pad={{ vertical: "medium" }}>
      <PartialWidthSection marginBottom="none">
        <GrommetFooter direction="row-responsive">
          <Text size="small">&copy; 2020 inbtwn. Magazine</Text>
          <Box direction="row" gap="medium" align="center">
            <Anchor
              label={
                <Text size="small" color="white">
                  About
                </Text>
              }
            />
            <Anchor
              label={
                <Text size="small" color="white">
                  Submit
                </Text>
              }
            />
            <Anchor
              label={
                <Text size="small" color="white">
                  FAQ
                </Text>
              }
            />
            <Anchor
              label={
                <Text size="small" color="white">
                  Contact
                </Text>
              }
            />
          </Box>
        </GrommetFooter>
      </PartialWidthSection>
    </Box>
  )
}
