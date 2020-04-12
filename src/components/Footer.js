import React from "react"
import { Anchor, Box, Footer, Text } from "grommet"
import { PartialWidthSection } from "../layouts"

const data = [
  {
    name: "Content",
    items: [
      {
        label: "Digital Issues",
        href: "https://issuu.com/inbtwnmag",
        type: "external",
      },
      {
        label: "Shop prints",
        href: "https://www.magcloud.com/user/inbtwnmag",
        type: "external",
      },
    ],
  },
  {
    name: "Social",
    items: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/inbtwnmag/",
        type: "external",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/inbtwnmag/",
        type: "external",
      },
    ],
  },
  {
    name: "Links",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:info@inbtwnmag.com" },
    ],
  },
]
const FooterAnchor = ({ type, ...rest }) => (
  <Anchor
    size="small"
    color="white"
    target={type === "external" && "_blank"}
    rel={type === "external" && "noopener noreferrer"}
    {...rest}
  />
)

const FooterContent = () => {
  return data.map(i => (
    <Box gap="medium" key={i.name} margin={{ bottom: "medium" }}>
      <Text weight="bold" size="small" color="#676767">
        {i.name}
      </Text>
      <Box gap="small">
        {i.items.map(item => (
          <FooterAnchor
            key={item.label}
            href={item.href}
            label={item.label}
            type={item.type}
          />
        ))}
      </Box>
    </Box>
  ))
}

const StyledFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Box background="rgb(43,43,43)" pad={{ vertical: "xlarge" }}>
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
