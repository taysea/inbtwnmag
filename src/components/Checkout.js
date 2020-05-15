import React from "react"
import { Box, Button, Text } from "grommet"

export const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_live_3YKDw9oL7l1LwRwLe36TgNAQ00228odXZO", {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      billingAddressCollection: "required",
      shippingAddressCollection: { allowedCountries: ["US"] },
      successUrl: `${window.location.origin}/order-confirmation`,
      cancelUrl: `${window.location.origin}/shop/falling-falling-into-and-out-of-myself-t-shirt-covid-19-relief-fundraiser`,
    })

    if (error) {
      console.error("Error:", error)
    }
  }

  render() {
    return (
      <Button
        onClick={event => this.redirectToCheckout(event)}
        disabled={!this.props.cart.length}
      >
        <Box
          pad={{ horizontal: "medium", vertical: "small" }}
          align="center"
          justify="center"
          background="black"
        >
          <Text size="small">
            {this.props.cart.length ? "Checkout" : "Cart is empty"}
          </Text>
        </Box>
      </Button>
    )
  }
}
