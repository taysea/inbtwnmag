import React from "react"
import { Box, Text } from "grommet"
import { Checkout, CheckoutPreview } from "."

export const OrderSummary = ({ detailedCart, cartItems, ...rest }) => {
  return (
    <Box gap="small" {...rest}>
      <Box pad="small" border={{ side: "bottom", color: "dark-3" }}>
        <Text margin="none" size="small" weight="bold">
          Order Summary
        </Text>
      </Box>
      <CheckoutPreview cart={detailedCart} />
      <Checkout cart={cartItems} />
    </Box>
  )
}
