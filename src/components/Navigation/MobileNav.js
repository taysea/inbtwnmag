import React, { useState } from "react"
import styled from "styled-components"
import { Anchor, Box, Button, Keyboard, Layer, Text } from "grommet"
import { Close, Instagram, Menu } from "grommet-icons"
import { NavItems } from "."
import { PartialWidthSection } from "../../layouts/PartialWidth"
import { CategoryLink } from ".."

const StyledAnchor = styled(Anchor)`
  font-weight: bold;
  text-decoration: none;
  color: #094533;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #094533;
  }
  font-size: ${props => props.size};
`

export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button icon={<Menu />} onClick={() => setOpen(true)} />
      {open && (
        <Keyboard onEsc={() => setOpen(false)}>
          <Layer full animate="fadeIn">
            <Box fill background="white">
              <Box pad={{ right: "medium", top: "large" }}>
                <Button
                  alignSelf="end"
                  icon={<Close />}
                  onClick={() => setOpen(false)}
                />
              </Box>
              <PartialWidthSection>
                <Box gap="large">
                  {NavItems.map(item => (
                    <CategoryLink
                      key={item}
                      to={
                        item !== "About" && item !== "Shop" && item !== "Cart"
                          ? `/categories/${item.toLowerCase()}`
                          : `/${item.toLowerCase()}`
                      }
                    >
                      <Box pad="medium" align="center">
                        <Text weight="bold">{item}</Text>
                      </Box>
                    </CategoryLink>
                  ))}
                  <StyledAnchor
                    label="Magazine"
                    href="https://issuu.com/inbtwnmag"
                    target="_blank"
                    rel="noopener"
                    alignSelf="center"
                  >
                    <Box pad="medium" align="center">
                      <Text weight="bold">Magazine</Text>
                    </Box>
                  </StyledAnchor>
                  <Button
                    a11yTitle="Instagram"
                    icon={<Instagram size="1.25em" color="dark-1" />}
                    label="@inbtwnmag"
                    href="https://www.instagram.com/inbtwnmag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    plain
                  />
                </Box>
              </PartialWidthSection>
            </Box>
          </Layer>
        </Keyboard>
      )}
    </>
  )
}
