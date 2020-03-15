import React from "react"
import { Anchor, Box, Footer, Text } from "grommet"
import { PartialWidthSection } from "../layouts"

const data = [
  ["Content", "Digital Issues", "Shop Prints"],
  ["Social", "Instagram", "Facebook"],
  ["Links", "About", "Contact"],
]
const FooterAnchor = ({ ...rest }) => (
  <Anchor href="/" size="small" color="white" {...rest} />
)

const FooterContent = () => {
  return data.map(item => (
    <Box gap="medium" key={item[0]} margin={{ bottom: "medium" }}>
      <Text weight="bold" size="small" color="#676767">
        {item[0]}
      </Text>
      <Box gap="small">
        {[1, 2].map(i => (
          <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
        ))}
      </Box>
    </Box>
  ))
}

const StyledFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Box
      background="rgb(43,43,43)"
      pad={{ vertical: "xlarge" }}
      margin={{ top: "medium" }}
    >
      <PartialWidthSection marginBottom="none">
        <Box gap="large">
          <Footer
            direction="row-responsive"
            background="rgb(43,43,43)"
            align="start"
          >
            <Box gap="medium" width="medium">
              <Text weight="bold" size="small" color="#676767">
                inbtwn.
              </Text>
              <Box gap="small">
                <Text weight="bold">founded in Los Angeles, CA.</Text>
                <Text size="small" weight="bold">
                  exploring the idea that we're constantly falling into and out
                  of ourselves.
                </Text>
              </Box>
            </Box>
            <FooterContent />
          </Footer>
          <Box>
            <Text size="small" color="#676767">
              © inbtwn. {year}
            </Text>
            <Text size="small" color="#676767">
              designed & developed by Taylor Seamans
            </Text>
          </Box>
        </Box>
      </PartialWidthSection>
    </Box>
  )
}

export { StyledFooter as Footer }
