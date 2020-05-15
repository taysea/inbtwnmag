import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Box, Header, Image, ResponsiveContext, Stack, Text } from "grommet"
import { PartialWidthSection } from "../../layouts/PartialWidth"
import logo from "../../../src/images/inbtwn.png"
import { MobileNav, Nav } from "."
import { Cart } from "grommet-icons"
import { getCart } from "../../utils"
const StyledLink = styled(Link)`
  color: white;
  &:visited {
    color: white;
  }
`
const getCartQuantity = cart => {
  let quantity = 0
  cart.forEach(item => (quantity += item.quantity))

  return quantity
}

export const NavBar = ({ isLanding, ...rest }) => {
  const size = useContext(ResponsiveContext)
  const cartItems = getCart()
  const cartQuantity = getCartQuantity(cartItems)
  return (
    <Box {...rest}>
      <Box background="#094533">
        <PartialWidthSection marginBottom="none">
          <Box
            direction="row-responsive"
            justify="center"
            gap="xsmall"
            align="center"
            pad={size === "small" ? { vertical: "small" } : undefined}
          >
            <Box align="center">
              <Text size="small" weight="bold">
                Want to help support COVID-19 Relief Funds?{" "}
              </Text>
            </Box>
            <Box align="center">
              <StyledLink to="/shop/falling-falling-into-and-out-of-myself-t-shirt-covid-19-relief-fundraiser">
                <Text size="small" weight="bold">
                  Buy a "Falling Into and Out Of Myself" shirt
                </Text>
              </StyledLink>
            </Box>
          </Box>
        </PartialWidthSection>
      </Box>
      <PartialWidthSection marginBottom="none">
        {size !== "small" ? (
          <Header pad={{ vertical: "medium" }}>
            <Link to="/">
              <Box width="175px" height="xxsmall" overflow="hidden">
                <Image src={logo} alt="inbtwn." fit="contain" />
              </Box>
            </Link>
            <Box direction="row" gap="small">
              <Nav />
              <Link to="/cart">
                <Stack anchor="top-right">
                  <Box pad="xsmall">
                    <Cart size="medium" color="black" />
                  </Box>
                  {cartQuantity > 1 ? (
                    <Box
                      background="#094533"
                      pad={{ horizontal: "8px", vertical: "4px" }}
                      round
                    >
                      <Text size="10px">{cartQuantity - 1}</Text>
                    </Box>
                  ) : (
                    undefined
                  )}
                </Stack>
              </Link>
            </Box>
          </Header>
        ) : (
          <Header height="xsmall">
            <Link to="/">
              <Box width="125px" height="xxsmall" overflow="hidden">
                <Image src={logo} alt="inbtwn." fit="contain" />
              </Box>
            </Link>
            <MobileNav />
          </Header>
        )}
      </PartialWidthSection>
    </Box>
  )
}
