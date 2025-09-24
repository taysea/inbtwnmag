import React from "react"
import { Anchor, Box, Footer, Image, Text } from "grommet"
import { PartialWidthSection } from "../layouts"
import logo from "../images/inbtwn_neg.png"

const data = [
  {
    name: "Magazine",
    items: [
      {
        label: "Digital issues",
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
      // {
      //   label: "Facebook",
      //   href: "https://www.facebook.com/inbtwnmag/",
      //   type: "external",
      // },
    ],
  },
  {
    name: "Links",
    items: [{ label: "About", href: "/about" }],
  },
]
const FooterAnchor = ({ type, ...rest }) => (
  <Anchor
    size="small"
    color="white"
    target={type === "external" ? "_blank" : undefined}
    rel={type === "external" ? "noopener noreferrer" : undefined}
    {...rest}
  />
)

const FooterContent = () => {
  return data.map(i => (
    <Box gap="medium" key={i.name} margin={{ bottom: "medium" }}>
      <Text weight="bold" size="small" color="text-weak">
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
    <Box
      background={{ dark: true, color: "background" }}
      pad={{ vertical: "xlarge" }}
    >
      <PartialWidthSection marginBottom="none">
        <Box gap="large">
          <Footer direction="row-responsive" align="start">
            <Box gap="medium" width="medium">
              <Box width="125px" overflow="hidden">
                <Image src={logo} alt="inbtwn." fit="contain" />
              </Box>
              <Box gap="small">
                <Text size="small" weight={500}>
                  founded in Los Angeles, CA.
                </Text>
                <Text size="small" weight={500}>
                  exploring the idea that we're constantly falling into and out
                  of ourselves.
                </Text>
              </Box>
            </Box>
            <FooterContent />
          </Footer>
          <Box>
            <Text size="xsmall" weight={500} color="text-weak">
              © inbtwn. {year}
            </Text>
            <Text size="xsmall" weight={500} color="text-weak">
              designed & developed by Taylor Seamans
            </Text>
          </Box>
        </Box>
      </PartialWidthSection>
    </Box>
  )
}

export { StyledFooter as Footer }
