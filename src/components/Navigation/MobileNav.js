import React, { useState } from "react"
import { Anchor, Box, Button, Layer } from "grommet"
import { Close, Menu } from "grommet-icons"
import { NavItems } from "."
import { PartialWidthSection } from "../../layouts/PartialWidth"

export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {!open ? (
        <Button icon={<Menu />} onClick={() => setOpen(true)} />
      ) : (
        <Layer full animation="fadeIn">
          <Box fill background="white">
            <Button
              alignSelf="end"
              icon={<Close />}
              onClick={() => setOpen(false)}
            />
            <PartialWidthSection>
              {NavItems.map(item => (
                <Anchor
                  key={item}
                  color="dark-1"
                  href={`/categories/${item.toLowerCase()}`}
                  size="large"
                >
                  <Box border={{ side: "bottom" }} pad={{ vertical: "large" }}>
                    {item}
                  </Box>
                </Anchor>
              ))}
            </PartialWidthSection>
          </Box>
        </Layer>
      )}
    </>
  )
}