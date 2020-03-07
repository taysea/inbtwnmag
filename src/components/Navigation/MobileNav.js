import React, { useState } from "react"
import { Box, Button, Layer } from "grommet"
import { Close, Instagram, Menu } from "grommet-icons"
import { NavItems } from "."
import { PartialWidthSection } from "../../layouts/PartialWidth"
import { CategoryLink } from ".."

export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {!open ? (
        <Button icon={<Menu />} onClick={() => setOpen(true)} />
      ) : (
        <Layer full>
          <Box fill background="white">
            <Box pad={{ right: "medium", top: "large" }}>
              <Button
                alignSelf="end"
                icon={<Close />}
                onClick={() => setOpen(false)}
              />
            </Box>
            <PartialWidthSection>
              {NavItems.map(item => (
                <CategoryLink
                  key={item}
                  to={`/categories/${item.toLowerCase()}`}
                >
                  <Box border={{ side: "bottom" }} pad={{ vertical: "large" }}>
                    {item}
                  </Box>
                </CategoryLink>
              ))}
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
      )}
    </>
  )
}
