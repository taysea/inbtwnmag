import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import ReactImageMagnify from "react-image-magnify"
import {
  Anchor,
  Box,
  Image,
  Grid,
  Text,
  FormField,
  Select,
  ResponsiveContext,
} from "grommet"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { Button as MaterialButton } from "@material-ui/core"
import favicon from "../images/favicon.ico"
import { formatPrice } from "../utils"
import { PartialWidthSection } from "../layouts"
import LargeShirt from "../assets/design_finalalignment.jpg"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const InfoSection = ({ children, name }) => (
  <Box gap="small">
    <Box
      pad={{ vertical: "small" }}
      border={{ side: "bottom", color: "light-5" }}
    >
      <Text size="small" weight="bold">
        {name}
      </Text>
    </Box>
    {children}
  </Box>
)

function ProductDetails({ location, data }) {
  const [cart, setCart] = useState([])
  const [selectedSku, setSelectedSku] = useState(
    data.allStripeSku.edges[0].node
  )
  const [quantity, setQuantity] = useState(1)
  const [showCheckoutButton, setShowCheckoutButton] = useState(false)

  useEffect(() => {
    const existingCart = JSON.parse(
      localStorage.getItem("stripe_checkout_items")
    )
    if (existingCart && existingCart.length) {
      setCart(existingCart)
    }
  }, [location])

  const addToStoredCart = (newSku, quantity) => {
    let itemExisted = false
    let updatedCart = cart.map(item => {
      if (newSku === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: (quantity += quantity) }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newSku, quantity: quantity }]
    }
    let shippingExisted = false
    cart.forEach(item => {
      if ("sku_HHKbm0mtjBUOvV" === item.sku) {
        shippingExisted = true
      }
    })

    // add shipping object to cart now that something is in it
    if (!shippingExisted) {
      updatedCart = [...updatedCart, { sku: "sku_HHKbm0mtjBUOvV", quantity: 1 }]
    }

    setCart(updatedCart)

    // Store the cart in the localStorage.
    localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
  }

  const addToCart = (event, skuId, quantity = 1) => {
    event.preventDefault()
    addToStoredCart(skuId, quantity)
  }

  return (
    <Layout location={location} height>
      <Helmet
        title={`${data.allStripeSku.edges[0].node.product.name} | Postcard Boy`}
      >
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <PartialWidthSection margin="auto">
            <Box direction="row" gap="medium" pad={{ vertical: "medium" }}>
              <Grid
                columns={{ count: size !== "small" ? 2 : 1, size: "auto" }}
                fill
                gap="large"
              >
                <Box
                  height={size !== "small" ? "500px" : "medium"}
                  style={size !== "small" ? { zIndex: 100 } : undefined}
                >
                  {size !== "small" ? (
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: selectedSku.image,
                        },
                        largeImage: {
                          src: LargeShirt,
                          width: 4000,
                          height: 4000,
                        },
                      }}
                    />
                  ) : (
                    <Image src={selectedSku.image} fit="cover" />
                  )}
                </Box>
                <Box gap="small">
                  <Box gap="small">
                    <Box gap="xsmall">
                      <Text weight="bold">
                        {data.allStripeSku.edges[0].node.product.name}
                      </Text>
                      <Text>
                        {formatPrice(selectedSku.price, selectedSku.currency)}
                      </Text>
                    </Box>
                    <Box gap="xsmall">
                      <Text size="xsmall">Size*</Text>
                      <Box direction="row" gap="xxsmall">
                        {data.allStripeSku.edges.map(({ node }) => (
                          <MaterialButton
                            onClick={() => setSelectedSku(node)}
                            variant={
                              selectedSku === node ? "contained" : "outlined"
                            }
                            disableElevation
                          >
                            {node.attributes.name}
                          </MaterialButton>
                        ))}
                      </Box>
                    </Box>
                    <Box width="xsmall">
                      <FormField label="Qty*">
                        <Select
                          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                          dropHeight="small"
                          value={quantity}
                          onChange={({ option }) => setQuantity(option)}
                        />
                      </FormField>
                    </Box>
                    <MaterialButton
                      variant="contained"
                      onClick={event => {
                        addToCart(event, selectedSku.id, quantity)
                        setShowCheckoutButton(true)
                      }}
                      disableElevation
                      style={{
                        background: "#3e5170",
                        color: "#FFF",
                        textTransform: "capitalize",
                      }}
                    >
                      <Text>Add to cart</Text>
                    </MaterialButton>
                    {showCheckoutButton && (
                      <StyledLink to="/cart">
                        <MaterialButton
                          variant="outlined"
                          disableElevation
                          style={{
                            border: "2px solid #3e5170",
                            color: "#3e5170",
                            textTransform: "capitalize",
                            width: "100%",
                          }}
                        >
                          <Text>Proceed to checkout</Text>
                        </MaterialButton>
                      </StyledLink>
                    )}
                  </Box>
                  <InfoSection name="Details">
                    <Text size="small">
                      {
                        data.allStripeSku.edges[0].node.product.metadata
                          .description
                      }
                    </Text>
                    <Text size="small">
                      All proceeds will go to{" "}
                      <Anchor
                        label="Feeding America"
                        href="https://www.feedingamerica.org/"
                        target="_blank"
                        color="#094533"
                      />{" "}
                      which provides meals to a network of over 200 food banks
                      across the US and advocates for food and nutrition
                      programs in government emergency response plans. Every $1
                      donated helps provide at least 10 meals to a family in
                      need.
                    </Text>
                    <Text size="small">
                      Many of those relying on food banks are among those
                      disproportionately affected by job distrutpions, lack of
                      paid sick leave, and other ripple effects of the
                      coronavirus. With so much economic hardship occurring,
                      access to food should not be among those worries.
                    </Text>
                  </InfoSection>
                  <InfoSection name="Content + Care">
                    <Text size="small">-100% Combed Ring-Spun Cotton</Text>
                    <Text size="small">-Screen-printed</Text>
                  </InfoSection>
                  <InfoSection name="Shipping + Returns">
                    <Text size="small">
                      We ship anywhere within the US, but if you are outside of
                      the US and are interested, please email us at{" "}
                      <Anchor
                        label="info@inbtwnmag.com"
                        href="mailto:info@inbtwnmag.com"
                        color="#094533"
                      />
                      , and we will sort things out for you.{" "}
                    </Text>
                    <Text size="small">All sales are final.</Text>
                  </InfoSection>
                </Box>
              </Grid>
            </Box>
          </PartialWidthSection>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query productQuery($productId: String!) {
    allStripeSku(filter: { product: { id: { eq: $productId } } }) {
      edges {
        node {
          id
          price
          currency
          attributes {
            name
          }
          image
          product {
            metadata {
              description
            }
            name
          }
        }
      }
    }
  }
`
export default ProductDetails
