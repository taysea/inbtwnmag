import React, { useState } from "react"
import { Box, Button, Keyboard, Layer, Text } from "grommet"
import { Close, Instagram, Menu } from "grommet-icons"
import { NavItems } from "."
import { PartialWidthSection } from "../../layouts/PartialWidth"
import { CategoryLink } from ".."

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
                        item !== "About"
                          ? `/categories/${item.toLowerCase()}`
                          : `/${item.toLowerCase()}`
                      }
                    >
                      <Box pad="medium" background="#EAEAEA" align="center">
                        <Text weight="bold">{item}</Text>
                      </Box>
                    </CategoryLink>
                  ))}
                </Box>
                <Box pad={{ vertical: "large" }} align="start">
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
