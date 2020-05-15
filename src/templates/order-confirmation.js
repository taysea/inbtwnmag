import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Anchor, Box, Image, Text, ResponsiveContext } from "grommet"
import { PartialWidthSection } from "../layouts"
import { BodyText } from "../components"
import AboutImage from "../assets/taylor-boma.jpg"

const OrderConfirmation = () => {
  const size = useContext(ResponsiveContext)

  useEffect(() => {
    // Empty localStorage after successful payment.
    localStorage.removeItem("stripe_checkout_items")
  }, [])

  return (
    <Layout>
      <SEO title="Order Successful | inbtwn." />
      <Box
        height={size !== "small" ? "50vh" : "medium"}
        margin={{ bottom: "large" }}
      >
        <Image
          src={AboutImage}
          alt="Taylor and Boma"
          fit="cover"
          height="100%"
        />
      </Box>
      <PartialWidthSection marginBottom="large">
        <Box width={{ max: "large" }} gap="medium">
          <Box gap="medium">
            <Text weight="bold" size="xxlarge" margin={{ bottom: "medium" }}>
              Thank you for your purchase and for helping us support Feeding
              America.
            </Text>
            <BodyText>
              You should be receiving an email confirmation of your payment. An
              email will be sent once your order has shipped.
            </BodyText>
            <BodyText>
              If you have any questions regarding your order, please email us at{" "}
              <Anchor
                target="_blank"
                href="mailto:info@inbtwnmag.com"
                color="#094533"
              >
                info@inbtwnmag.com
              </Anchor>
              .
            </BodyText>
          </Box>
        </Box>
      </PartialWidthSection>
    </Layout>
  )
}

export default OrderConfirmation
