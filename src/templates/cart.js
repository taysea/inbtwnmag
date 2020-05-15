import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Grid, Image, ResponsiveContext, Text } from "grommet"
import { IconButton } from "@material-ui/core"
import { FormSubtract, FormAdd } from "grommet-icons"
import { getCart, setCart } from "../utils"
import { OrderSummary } from "../components"
import { PartialWidthSection } from "../layouts"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_live_3YKDw9oL7l1LwRwLe36TgNAQ00228odXZO")

const createCart = (cartItems, data) => {
  let visualCart = []
  cartItems.forEach((item, index) => {
    data.allStripeSku.edges.forEach(({ node }) => {
      // don't show shipping item
      if (node.id === item.sku && node.id !== "sku_HHKbm0mtjBUOvV") {
        node.quantity = item.quantity
        node.cartIndex = index
        visualCart.push(node)
      }
    })
  })

  return visualCart
}

function Cart({ data }) {
  const [cartItems, setCartItems] = useState(getCart())
  const cart = createCart(cartItems, data)
  const addToStoredCart = itemToAdd => {
    const updatedCart = cartItems.map(item => {
      if (itemToAdd.sku === item.sku) {
        return { sku: item.sku, quantity: (itemToAdd.quantity += 1) }
      } else {
        return item
      }
    })
    setCartItems(updatedCart)
    // Store the cart in the localStorage.
    localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
  }

  const removeFromStoredCart = itemToRemove => {
    let quantityZero
    const updatedCart = cartItems.map(item => {
      if (itemToRemove.sku === item.sku) {
        if (itemToRemove.quantity - 1 === 0) {
          quantityZero = true
        }
        return { sku: item.sku, quantity: itemToRemove.quantity - 1 }
      } else {
        return item
      }
    })

    if (quantityZero) {
      deleteItemFromCart(itemToRemove)
    } else {
      setCartItems(updatedCart)
      // Store the cart in the localStorage.
      localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
    }
  }

  const deleteItemFromCart = itemToDeleteId => {
    let filteredItems
    filteredItems = cartItems.filter(item => item.sku !== itemToDeleteId.sku)
    if (
      filteredItems.length === 1 &&
      filteredItems[0].sku === "sku_HHKbm0mtjBUOvV"
    ) {
      filteredItems = filteredItems.filter(
        item => item.sku !== "sku_HHKbm0mtjBUOvV"
      )
    }
    setCartItems(filteredItems)
    setCart(filteredItems)
  }
  return (
    <Layout>
      <SEO title="Your Cart | inbtwn." />
      <ResponsiveContext.Consumer>
        {size => (
          <PartialWidthSection>
            <Box
              pad={{ top: "medium" }}
              direction="row-responsive"
              justify="between"
              gap="large"
            >
              <Box gap="medium" flex>
                <Box pad="small" border={{ side: "bottom", color: "dark-3" }}>
                  <Text margin="none" size="small" weight="bold">
                    Your Cart
                  </Text>
                </Box>
                {cart.map(item => (
                  <Grid
                    columns={["xsmall", "small", "auto", "flex"]}
                    gap="medium"
                  >
                    <Box height="xsmall">
                      <Image src={item.image} fit="cover" />
                    </Box>
                    <Box justify="center">
                      <Text size="small">{item.product.name}</Text>
                      <Text size="xsmall">Size: {item.attributes.name}</Text>
                    </Box>
                    <Box direction="row" align="center" gap="xsmall">
                      <Box pad="xsmall" round="full"></Box>
                      <IconButton
                        onClick={() =>
                          removeFromStoredCart(cartItems[item.cartIndex])
                        }
                      >
                        <FormSubtract />
                      </IconButton>
                      <Text>{item.quantity}</Text>

                      <IconButton
                        onClick={
                          item.quantity < 10
                            ? () => addToStoredCart(cartItems[item.cartIndex])
                            : undefined
                        }
                      >
                        <FormAdd color={item.quantity < 10 ? "text" : "#CCC"} />
                      </IconButton>
                    </Box>
                  </Grid>
                ))}
              </Box>
              <OrderSummary
                cartItems={cartItems}
                detailedCart={cart}
                width={
                  size !== "small"
                    ? size !== "medium"
                      ? "medium"
                      : "small"
                    : "100%"
                }
              />
            </Box>
          </PartialWidthSection>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allStripeSku {
      edges {
        node {
          id
          image
          currency
          price
          product {
            name
          }
          attributes {
            name
          }
        }
      }
    }
  }
`

export default Cart
