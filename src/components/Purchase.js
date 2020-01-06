import React from "react"
import { Box, Button, Paragraph, Text } from "grommet"
import { PartialWidthSection } from "../layouts"
import Book from "../assets/book.png"
export const Purchase = () => {
  return (
    <Box
      background={`url(${Book})`}
      height="70vh"
      gap="medium"
      justify="center"
    >
      <PartialWidthSection>
        <Box>
          <Text size="xxlarge" weight="bold">
            Falling Into and Out of Myself
          </Text>
          <Paragraph>
            This 98 page question and photo book paired photographers with
            anonymously asked questions, exploring the ways our navigations of
            self can overlap.
          </Paragraph>
        </Box>
        <Box direction="row-responsive" gap="small">
          <Button label="buy now!" primary />
          <Button label="read online" primary />
        </Box>
      </PartialWidthSection>
    </Box>
  )
}
